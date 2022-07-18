import { FiGift } from 'react-icons/fi'
import { BiAddToQueue } from 'react-icons/bi'
import { GoFileDirectory } from 'react-icons/go'
function Typing() {
  const style = {
    icon: 'relative / block / p-2 rounded-full / text-xl / / hover:bg-gray-300'
  }
  return (
    <div className="relative / flex items-center gap-1 / h-12">
      <div className="relative / flex ">
        <div className={style.icon}><FiGift /></div>
        <div className={style.icon}><BiAddToQueue /></div>
        <div className={style.icon}><GoFileDirectory /></div>
      </div>
      <div className="relative / flex item-center flex-1 / h-full">
        <input className="relative / flex-1 / outline-none rounded-full border px-2 / " placeholder="Typing something..." />
      </div>
    </div>
  )
}
export default Typing
