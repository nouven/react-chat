import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { chatContext } from '../../context/chatContext'
import Left from './Left'
import Right from './Right'
function Chat() {
  const chatComsumer = useContext(chatContext)
  const navigate = useNavigate();
  useEffect(() => {
    console.log(chatComsumer)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="relative / flex gap-2 / w-full h-full border p-2 / / border-black">
      <div className="relative / flex flex-col flex-[1] / h-full border / / border-black ">
        <Left />
      </div>
      <div className="relative / flex flex-col flex-[2] / h-full border / / border-black">
        <Right />
      </div>
    </div>
  )
}
export default Chat
