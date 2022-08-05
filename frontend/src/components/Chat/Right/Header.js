import { IoInformationSharp } from 'react-icons/io5'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'
import { useContext } from 'react'
import { chatContext } from '../../../context/chatContext'

function Header() {
  const style = {
    icon: 'relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300'
  }
  let { temp, setIsModal } = useContext(chatContext)
  let handleClick = () => {
    setIsModal(() => {
      return { display: true, number: 2 }
    })
  }
  return (
    <div className="relative / flex justify-between items-center / h-12 border ">
      <div className="relative / flex gap-1">
        <div className="relative / block / h-8 w-8 rounded-full overflow-hidden">
          <img className="object-cover" src={temp.avatar} alt="" />
        </div>
        <p>{temp.name}</p>
      </div>
      <div className="relative / flex items-center">
        <div className={style.icon}><BsTelephoneForward /></div>
        <div className={style.icon}><AiOutlineVideoCamera /></div>
        <div onClick={() => handleClick()} className={style.icon}><IoInformationSharp /></div>
      </div>
    </div >
  )
}
export default Header
