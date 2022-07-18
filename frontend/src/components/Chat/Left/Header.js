import { BsCameraReels } from 'react-icons/bs'
import { BiDotsHorizontal } from 'react-icons/bi'
import { RiUserAddLine } from 'react-icons/ri'
function Header() {
  const style = {
    icon: "relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300 / cursor-pointer"
  }
  return (
    <div className="relative / flex justify-between items-center / h-12 border / / border-black / select-none">
      <p className="relative / block / / text-2xl font-bold / ">Chat</p>
      <div className="relative / flex / ">
        <div className={style.icon}><BsCameraReels /></div>
        <div className={style.icon}><RiUserAddLine /></div>
        <div className={style.icon}><BiDotsHorizontal /></div>
      </div>
    </div>
  )
};
export default Header
