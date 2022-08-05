import { BsSearch } from 'react-icons/bs'
function Search() {
  return (
    <div className="relative / flex items-center gap-2 / p-2 rounded-xl border / / select-none ">
      <div className="relative / block / / text-xl"><BsSearch /></div>
      <input className="relative / block / outline-none / / / peer " placeholder="Search..." />

      <div className="absolute bottom-0 right-0 left-0 translate-y-full z-10 / hidden flex-col gap-1 / rounded-xl / / bg-white peer-focus:flex">

        <div className="relative / flex items-center gap-1 / py-[2px] border rounded-xl / / / cursor-pointer ">
          <div className="relative / block / w-8 h-8 rounded-full overflow-hidden">
            <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
          </div>
          <div className="relative / flex flex-col flex-1 ">
            <p>nouven</p>
            <p className="relative / block / / text-xs font-light /">ooouvnouven@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Search
