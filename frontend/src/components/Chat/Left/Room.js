import { useContext } from "react";
import { chatContext } from "../../../context/chatContext";

function Room({ _id, avatar1, avatar2, name, lastMsg }) {
  const style = {
    img: " absolute / block / w-5 h-5 rounded-full overflow-hidden / "
  }
  const handleClick = () => {
    setTemp(() => {
      const preRoom = temp.curRoom || ""
      const curRoom = _id
      return { preRoom, curRoom, name, avatar1 }
    })
  }
  const { temp, setTemp } = useContext(chatContext)

  return (
    <div onClick={handleClick} className="relative / flex items-center gap-1 / border p-[2px] rounded-xl / / / cursor-pointer">
      <div className="relative / block / h-8 w-8 / / ">
        <div className={`${style.img} right-0 top-0`}>
          <img className='object-cover' src={avatar1} alt="" />
        </div>
        <div className={`${style.img} left-0 bottom-0`}>
          <img className='object-cover' src={avatar2} alt="" />
        </div>
      </div>

      <div className="relative / flex flex-col flex-1 / ">
        <p>nouven</p>
        <div className="relative / flex justify-between / / font-light text-xs">
          <p>{lastMsg}</p>
          <p>1d ago</p>
        </div>
      </div>
    </div>
  )
}
export default Room
