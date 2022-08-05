import { useContext, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { chatContext } from '../../../context/chatContext'
import userReq from '../../../api/userReq'
import roomReq from '../../../api/roomReq'
function Modal() {
  let { setIsModal, info, socket } = useContext(chatContext)
  let [added, setAdded] = useState([])
  let [searchResult, setSearchResult] = useState([])
  let [roomName, setRoomName] = useState('')

  let handleSearch = (value) => {
    userReq.getUsers(value).then(data => {
      let users = data.filter(user => {
        return user._id != info._id
      })
      setSearchResult(users)
    })
  }
  let handleAdd = (user) => {
    let check = false
    if (added.length) {
      check = added.some((elmt) => {
        return user._id === elmt._id
      })
    }
    if (!check) {
      setAdded(prev => {
        return [...prev, user]
      })
    }
  }
  let handleRemove = (_id) => {
    setAdded(() => {
      return added.filter((user) => {
        return user._id !== _id
      })
    })
  }
  let handleCreate = () => {
    setIsModal({ display: false })
    let users = added.map((user) => {
      return { _id: user._id }
    })
    users = [...users, { _id: info._id }]
    roomReq.createPublicRoom(users, roomName)
      .then(data => {
        let roomId = data
        let members = users.map((user) => {
          return user._id
        })
        socket.emit('createRoom', { roomId, members })
      })
  }

  return (
    <div className="relative / block / border rounded-lg w-[600px] h-[350px] p-2 / bg-white">
      <div onClick={() => setIsModal({ display: false })} className="absolute -top-2 -right-2 / block / rounded-full / text-xl / text-red-600 bg-white / cursor-pointer "><IoMdCloseCircle /></div>

      <div className="relative / flex / h-full  /   ">

        <div className="relative / flex flex-col flex-1">

          <div className="relative / p-1 w-full rounded-xl border-b">
            <input onChange={(e) => handleSearch(e.target.value)} className="relative / block / w-full px-2 outline-none  " placeholder="Search..." />
          </div>
          <div className="relative / flex flex-col gap-1 overflow-y-auto">

            {searchResult.map((user) => {
              return (
                < div key={user._id} className="relative / flex justify-between  items-center / w-full px-1 border rounded-lg " >
                  <div className="relative / flex items-center gap-2 /  ">
                    <div className="relative / h-6 w-6 rounded-full overflow-hidden">
                      <img className="object-cover" src={user.avatar} alt="" />
                    </div>
                    <div>
                      <p className="text-sm">{user.name}</p>
                      <p className="text-xs font-light">{user.email}</p>
                    </div>
                  </div>
                  <button onClick={() => handleAdd(user)} className="relative / px-1 outline-none border   rounded-lg">
                    add
                  </button>
                </div>
              )
            })}

          </div>
        </div>

        <div className="relative / flex flex-col flex-1 gap-1 border-l ">
          <div className="relative / flex justify-center /   / text-sm  ">
            <input value={roomName} onChange={(e) => setRoomName(e.target.value)} className="relative / border rounded-xl py-1 px-2 w-full outline-none placeholder-gray-500 " placeholder="Enter a room name..." />
          </div>
          <div className="relative / flex justify-center / border-b / text-sm font-light ">
            Added List
          </div>
          <div className="flex flex-col flex-1 gap-1 / overflow-y-auto ">

            {added.map((user) => {
              return (
                < div key={user._id} className="relative / flex justify-between  items-center / w-full px-1 border rounded-lg " >
                  <div className="relative / flex items-center gap-2 /  ">
                    <div className="relative / h-6 w-6 rounded-full overflow-hidden">
                      <img className="object-cover" src={user.avatar} alt="" />
                    </div>
                    <div>
                      <p className="text-sm">{user.name}</p>
                      <p className="text-xs font-light">{user.email}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(user._id)} className="relative / px-1 outline-none border   rounded-lg">
                    remove
                  </button>
                </div>
              )
            })}
          </div>
          <div className="flex gap-2 justify-end px-2 py-1">
            <button onClick={() => setIsModal({ display: false })} className=" rounded-lg px-1 outline-none border">Cancel</button>
            <button onClick={() => handleCreate()} className=" rounded-lg px-1 outline-none border">Create</button>
          </div>
        </div>

      </div>
    </div >
  )
}
export default Modal
