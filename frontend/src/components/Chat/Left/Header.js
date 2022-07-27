import { BsCameraReels } from 'react-icons/bs'
import { BiDotsHorizontal } from 'react-icons/bi'
import { RiUserAddLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import { chatContext } from '../../../context/chatContext'
function Header() {
  const style = {
    icon: "relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300 / cursor-pointer"
  }
  let { info } = useContext(chatContext)
  let handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  }
  return (
    <div className="relative / flex justify-between items-center / h-12 border / / border-black / select-none">

      <div className="relative / flex items-end gap-1">
        <div className="relative / flex justify-center items-center / h-8 w-8 rounded-full overflow-hidden">
          <img className="relative / object-cover" src={info.avatar} alt='' />
        </div>
        <p>{info.name}</p>
      </div>

      <div className="relative / flex / ">
        <div className={style.icon}><BsCameraReels /></div>
        <div className={style.icon}><RiUserAddLine /></div>
        <div className={style.icon}><BiDotsHorizontal /></div>
        <div onClick={() => handleLogout()} className={style.icon}><FiLogOut /></div>
      </div>
    </div>
  )
};
export default Header
