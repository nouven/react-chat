import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
const chatContext = createContext()
function ChatProvider({ children }) {

  const local = useLocation();
  const [rooms, setRooms] = useState([])
  const [messages, setMessages] = useState([])
  const [temp, setTemp] = useState({})
  const [info, setInfo] = useState(local.state)
  const [socket, setSocket] = useState(() => io('http://localhost:5000'))

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/')
    }
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

