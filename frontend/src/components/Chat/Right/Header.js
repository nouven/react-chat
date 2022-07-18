import { IoInformationSharp } from 'react-icons/io5'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'

function Header() {
  const style = {
    icon: 'relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300'
  }
  return (
    <div className="relative / flex justify-between items-center / h-12 border ">
      <div className="relative / flex gap-1">
        <div className="relative / block / h-8 w-8 rounded-full overflow-hidden">
          <img className="object-cover" src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
        </div>
        <p>nouven</p>
      </div>
      <div className="relative / flex items-center">
        <div className={style.icon}><BsTelephoneForward /></div>
        <div className={style.icon}><AiOutlineVideoCamera /></div>
        <div className={style.icon}><IoInformationSharp /></div>
      </div>
    </div >
  )
}
export default Header
