import Header from './Header'
import Message from './Message'
import Typing from './Typing'
function Right() {
  return (
    <div className="relative / flex flex-col h-full / overflow-y-auto ">
      <Header />
      <div className="relative / flex flex-1 flex-col-reverse gap-1 / overflow-y-auto pb-[2px]">
        <Message isMe={true} message={'this is message'} />
        <Message isMe={true} message={'this is message'} />
        <Message isMe={false} />
        <Message isMe={true} />
        <Message isMe={true} message={'this is message'} />
        <Message isMe={false} />
        <Message isMe={true} />
        <Message isMe={true} message={'this is message'} />
        <Message isMe={false} />
        <Message isMe={true} />
        <Message isMe={true} message={'this is message'} />
        <Message isMe={false} />
        <Message isMe={true} />
      </div>
      <Typing />
    </div>
  )
}
export default Right
