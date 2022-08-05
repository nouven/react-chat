import { useEffect, useContext } from 'react'
import { chatContext } from '../../context/chatContext'
import msgReq from '../../api/msgReq'
import Modal from './Modal'
import InfoRoom from './Modal/InfoRoom'
import Left from './Left'
import Right from './Right'
function Chat() {
  let { socket, temp, info, isModal } = useContext(chatContext)


  useEffect(() => {
    let userId = info._id
    socket.emit('init', { userId })
    return (() => {
      socket.off()
    })
  }, [])
  return (
    <div className="relative / flex gap-2 / w-full h-full border p-2 / / border-black">
      {isModal.display && (
        <div className="absolute inset-0 z-10 / flex justify-center items-center / / / bg-black bg-opacity-70 / select-none">
          {
            isModal.number === 1 && <Modal />
          }
          {
            isModal.number === 2 && <InfoRoom />
          }
        </div>
      )}
      <div className="relative / flex flex-col flex-[1] / h-full border / / border-black ">
        <Left />
      </div>
      <div className="relative / flex flex-col flex-[3] / h-full border / / border-black">
        <Right />
      </div>
    </div>
  )
}
export default Chat
