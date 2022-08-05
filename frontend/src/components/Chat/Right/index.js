import { useEffect, useContext } from 'react'
import Header from './Header'
import Message from './Message'
import Typing from './Typing'
import { chatContext } from '../../../context/chatContext'
function Right() {
  const { messages, info, temp } = useContext(chatContext)
  if (temp.preRoom) {
    return (
      <div className="relative / flex flex-col h-full / overflow-y-auto ">
        <Header />
        <div className="relative / flex flex-1 flex-col-reverse gap-1 / overflow-y-auto pb-[2px]">
          {messages.map(message => {
            let isMe = false
            let content = message.content
            let senderName = message.senderName
            let _id = message._id
            if (message.senderId === info._id) {
              isMe = true
            }
            let value = { content, isMe, senderName }
            return <Message
              key={_id}
              value={value}
            />
          })}
        </div>
        <Typing />
      </div>
    )
  } else {
    return (<h1>ha</h1>)
  }
}
export default Right
