import { createContext, useEffect, useLayoutEffect, useState } from 'react'
import io from 'socket.io-client'
import userReq from '../api/userReq'
const chatContext = createContext()
function ChatProvider({ children }) {


  const [socket, setSocket] = useState(io('http://localhost:5000'))
  const [rooms, setRooms] = useState([])
  const [messages, setMessages] = useState([])
  const [temp, setTemp] = useState({})
  const [info, setInfo] = useState({})
  useLayoutEffect(() => {
    userReq.getById().then(user => {
      const _id = user._id.toString()
      const name = user.name
      const avatar = user.avatar
      setInfo({ _id, name, avatar })
    })
  }, [])

  const value = {
    socket, setSocket,
    info, setInfo,
    rooms, setRooms,
    messages, setMessages,
    temp, setTemp,
  }
  return (
    <chatContext.Provider value={value}>
      {children}
    </ chatContext.Provider>
  )
}
export { chatContext, ChatProvider }

