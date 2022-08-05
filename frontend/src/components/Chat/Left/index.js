import { useContext, useEffect, useState } from 'react'
import { chatContext } from '../../../context/chatContext'
import roomReq from '../../../api/roomReq'
import { BsCameraReels } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiUserAddLine } from 'react-icons/ri'
import Header from './Header'
import Room from './Room'
import Search from './Search'
function Left() {
  let { setIsModal, socket, rooms, setRooms, info } = useContext(chatContext)
  let [roomState, setRoomState] = useState({ roomId: '', lastMsg: '', isActive: true });

  const style = {
    icon: "relative / block / p-2 rounded-full / text-lg / / hover:bg-gray-300 / cursor-pointer"
  }
  useEffect(() => {
    roomReq.getAllRoom(info._id)
      .then(data => {
        setRooms(data)
      })
  }, [])
  useEffect(() => {
    socket.on('roomState', ({ roomId, content }) => {
      setRoomState((prev) => {
        return { ...prev, roomId, content }
      })
    })
  }, [])
  useEffect(() => {
    socket.on('createRoom', ({ roomId }) => {
      console.log(roomId)
      let userId = info._id
      roomReq.getOneRoom(roomId, userId)
        .then(room => {
          setRooms(prev => {
            return [room, ...prev]
          })
        })
    })
  }, [])
  return (
    <div className="relative / flex flex-col gap-1 /  / / overflow-y-auto select-none">
      <Header />
      <Search />

      <div className="relative / flex justify-between items-center / border / / / select-none">
        <p className="relative / block / / text-xl font-bold / ">Chat</p>
        <div className="relative / flex / ">
          <div className={style.icon}><BsCameraReels /></div>
          <div className={style.icon}><RiUserAddLine /></div>
          <div onClick={(e) => setIsModal({ display: true, number: 1 })} className={style.icon}><AiOutlineUsergroupAdd /></div>
        </div>
      </div>

      <div className="/ flex flex-col flex-1 gap-1 / overflow-y-auto / / / ">
        {rooms.map(room => {
          let avatar1 = room.roomId.users[0]._id.avatar
          let avatar2 = "";
          if (room.roomId.users[1]) {
            avatar2 = room.roomId.users[1]._id.avatar
          }
          let name = room.roomId.name
          let _id = room.roomId._id
          let members = room.roomId.users
          let unSeenMsg = room.unSeenMsg
          let lastMsg = room.lastMsg || 'last message'
          members = members.map(member => { return member._id._id })
          let value = { avatar1, avatar2, name, _id, members, unSeenMsg, lastMsg }
          return <Room key={room.roomId._id}
            value={value}
            roomState={roomState}
          />
        })}
      </div>
    </div>
  )
}
export default Left
