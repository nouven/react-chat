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
            let _id = message._id
            if (message._id === info._id) {
              isMe = true
            }
            return <Message key={_id} message={content} isMe={isMe} />
          })}

          <Message isMe={true} message={'this is message'} />
          <Message isMe={false} message={'ooouvnouven'} />
        </div>
        <Typing />
      </div>
    )
  } else {
    return (<h1>ha</h1>)
  }
}
export default Right
