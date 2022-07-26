import { useContext, useEffect } from 'react'
import { chatContext } from '../../../context/chatContext'
import roomReq from '../../../api/roomReq'
import Header from './Header'
import Room from './Room'
import Search from './Search'
function Left() {
  const { rooms, setRooms, info } = useContext(chatContext)
  useEffect(() => {
    roomReq.getAllRoom(info._id)
      .then(data => {
        setRooms(data)
      })
  }, [])
  return (
    <div className="relative / flex flex-col gap-1 / / / overflow-y-auto select-none">
      <Header />
      <Search />
      <div className="/ flex flex-col flex-1 gap-1 / overflow-y-auto / / / ">
        {rooms.map(room => {
          let avatar1 = room.room.users[0]._id.avatar
          let avatar2 = room.room.users[1]._id.avatar
          let name = room.room.name
          let lastMsg = room.room.lastMsg || 'default'
          let _id = room.room._id
          let members = room.room.users
          members = members.map(member => { return member._id._id })
          return <Room key={room.room._id}
            avatar1={avatar1}
            avatar2={avatar2}
            name={name}
            lastMsg={lastMsg}
            _id={_id}
            members={members}
          />
        })}
      </div>
    </div>
  )
}
export default Left
