import Left from './Left'
import Right from './Right'
function Chat() {
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
