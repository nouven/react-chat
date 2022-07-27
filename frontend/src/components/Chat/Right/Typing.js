import { FiGift } from 'react-icons/fi'
import { BiAddToQueue } from 'react-icons/bi'
import { GoFileDirectory } from 'react-icons/go'
import { useContext, useEffect, useState } from 'react'
import { chatContext } from '../../../context/chatContext'
import { nanoid } from 'nanoid'
import { } from '../../../api/msgReq'
function Typing() {
  const style = {
    icon: 'relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300'
  }
  let { info, temp, socket, setMessages } = useContext(chatContext)
  let [typing, setTyping] = useState('');
  useEffect(() => {
    socket.on('chat', ({ _id, roonId, senderId, content, createdAt }) => {
      setMessages(prev => {
        return [{ _id, senderId, content, createdAt }, ...prev]
      })

    })
  }, [])
  let handleSubmit = (event) => {
    if (event.keyCode === 13) {
      let roomId = temp.preRoom
      let senderId = info._id
      let content = typing
      let createdAt = new Date();
      let members = temp.members
      let _id = nanoid()
      socket.emit('chat', { _id, roomId, senderId, content, members, createdAt })
      setTyping('')
    } else {
      return
    }
  }
  return (
    <div className="relative / flex items-center gap-1 / h-12">
      <div className="relative / flex ">
        <div className={style.icon}><FiGift /></div>
        <div className={style.icon}><BiAddToQueue /></div>
        <div className={style.icon}><GoFileDirectory /></div>
      </div>
      <div className="relative / flex item-center flex-1 / h-full">
        <input onKeyDown={(event) => { handleSubmit(event) }} onChange={(e) => setTyping(e.target.value)} value={typing} className="relative / flex-1 / outline-none rounded-full border px-2 / " placeholder="Typing something..." />
      </div>
    </div>
  )
}
export default Typing
