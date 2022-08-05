import { useContext, useEffect, useState } from "react";
import msgReq from "../../../api/msgReq";
import { chatContext } from "../../../context/chatContext";

function Room({ value, roomState }) {
  const style = {
    img: " absolute / block / w-5 h-5 rounded-full overflow-hidden / "
  }
  let { temp, setTemp, socket, setMessages, info } = useContext(chatContext)
  let [state, setState] = useState({ lastMsg: value.lastMsg, unSeenMsg: value.unSeenMsg, isActive: true })

  useEffect(() => {
    if (value._id === roomState.roomId && roomState.roomId !== temp.preRoom) {
      setState((prev) => {
        let unSeenMsg = state.unSeenMsg + 1
        let lastMsg = roomState.content
        return { ...prev, unSeenMsg, lastMsg }
      })
    }
    if (value._id === roomState.roomId) {
      setState((prev) => {
        let lastMsg = roomState.content
        return { ...prev, lastMsg }
      })

    }
  }, [roomState])
  console.log('re-render')

  const handleClick = () => {
    if (temp.preRoom !== value._id) {
      setTemp(() => {
        const preRoom = value._id
        let avatar = value.avatar1
        return { preRoom, name: value.name, avatar, members: value.members }
      })
      setState((prev) => {
        return { ...prev, unSeenMsg: 0 }
      })
      socket.emit('joinRoom', { curRoom: value._id, preRoom: temp.preRoom })
      msgReq.getAllMsg(value._id).then(data => {
        setMessages(data)
      })
      msgReq.updateRoomUser(temp.preRoom, info._id)
      msgReq.updateRoomUser(value._id, info._id)
    }
    return;
  }

  return (
    <div onClick={handleClick} className="relative / flex items-center gap-2 / border p-[2px] rounded-xl / / / cursor-pointer">
      {value.avatar2 && (
        <div className="relative / block / h-8 w-8 / / ">
          <div className={`${style.img} right-0 top-0`}>
            <img className='object-cover' src={value.avatar1} alt="" />
          </div>
          <div className={`${style.img} left-0 bottom-0`}>
            <img className='object-cover' src={value.avatar2} alt="" />
          </div>
          <div className="absolute -bottom-1 -right-1 / block / w-3 h-3 rounded-full border-2 / / border-white bg-green-500"></div>
        </div>
      )}
      {!value.avatar2 && (
        <div className="relative / block / h-8 w-8 / / ">
          <div className="rounded-full overflow-hidden">
            <img className='object-cover' src={value.avatar1} alt="" />
          </div>
          <div className="absolute -bottom-1 -right-1 / block / w-3 h-3 rounded-full border-2 / / border-white bg-green-500"></div>
        </div>

      )}


      <div className="relative / flex flex-col flex-1 / ">
        <div className="relative / flex justify-between">
          <p>{value.name}</p>

          {(state.unSeenMsg !== 0) ? (
            <div className="relative / flex justify-center items-center / w-4 h-4 p-[2px] rounded-full / text-xs font-bold / text-white bg-red-600">{state.unSeenMsg}</div>
          ) : ''}

        </div>
        <div className="relative / flex justify-between / / font-light text-xs">
          <p className=" relative / truncate max-w-[50%]">{state.lastMsg}</p>
          <p>1d ago</p>
        </div>
      </div>
    </div>
  )
}
export default Room
