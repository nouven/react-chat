import { useContext, useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { chatContext } from '../../../context/chatContext'
import userReq from '../../../api/userReq'
import roomReq from '../../../api/roomReq'
function InfoRoom() {
  let { temp, info, setIsModal, rooms, setRooms } = useContext(chatContext)
  let [members, setMembers] = useState([])
  useEffect(() => {
    let roomId = temp.preRoom
    userReq.getUsersRoom(roomId)
      .then(users => setMembers(users))
  }, [])
  let handleLeave = () => {
    let userId = info._id
    let roomId = temp.preRoom
    roomReq.updateRoomUsers(roomId, userId)
    setRooms(() => {
      return rooms.filter((room) => {
        return room.roomId._id !== roomId
      })
    })
    setIsModal({ display: false })
  }
  return (
    <div className="relative / flex flex-col gap-1 / h-96 w-96 rounded-xl p-1 / / bg-white">
      <div onClick={() => setIsModal({ display: false })} className="absolute -right-1 -top-1 rounded-full text-xl bg-white text-red-500 / "><IoMdCloseCircle /></div>
      <div className="text-center">Members</div>
      <div className="relative / flex flex-col items-center flex-1 gap-1 overflow-y-auto">
        {members.map(member => {
          return (
            <div key={member._id} className="relative / flex items-center gap-2 / w-full px-1 border rounded-lg " >
              <div className="relative / h-6 w-6 rounded-full overflow-hidden">
                <img className="object-cover" src={member.avatar} alt="" />
              </div>
              <div>
                <p className="text-sm">{member.name}</p>
                <p className="text-xs font-light">{member.email}</p>
              </div>
            </div>
          )
        })}

      </div>
      <div className="relative / flex justify-end gap-1">
        <button onClick={() => { setIsModal({ display: false }) }} className="relative p-1 border rounded-lg">Cancel</button>
        <button onClick={() => handleLeave()} className="relative p-1 border rounded-lg">Leave</button>
      </div>
    </div>
  )
}

export default InfoRoom
