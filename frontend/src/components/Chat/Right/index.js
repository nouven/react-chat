import { useEffect, useContext } from 'react'
import Header from './Header'
import Message from './Message'
import Typing from './Typing'
import { chatContext } from '../../../context/chatContext'
function Right() {
  const { messages, setMessages, info } = useContext(chatContext)
  useEffect(() => {
    setMessages([
      { _id: 2, content: 'hahaha 1' },
      { _id: 3, content: 'hahaha 2' },
      { _id: 4, content: 'hahaha 3' },
      { _id: 5, content: 'hahaha 4' },
      { _id: 6, content: 'hahaha 5' },
    ])
  }, [])
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
}
export default Right
