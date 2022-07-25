import { useContext, useEffect } from 'react'
import { chatContext } from '../../../context/chatContext'
import roomReq from '../../../api/roomReq'
import Header from './Header'
import Room from './Room'
import Search from './Search'
function Left() {
  const { rooms, setRooms, info } = useContext(chatContext)
  useEffect(() => {
    roomReq.getAllRoom('62dbf957b5dcf18819ce4c60')
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
          return <Room key={room.room._id}
            avatar1={room.room.users[0]._id.avatar}
            avatar2={room.room.users[1]._id.avatar}
            name={room.room.name}
            lastMsg={room.room.lastMsg || 'default'}
            _id={room.room._ic}
          />
        })}
      </div>
    </div>
  )
}
export default Left
