import SearchResult from './SearchResult'
import { BsSearch } from 'react-icons/bs'
function Search() {
  return (
    <div className="relative / flex items-center gap-2 / p-2 rounded-xl border / / select-none ">
      <div className="relative / block / / text-xl"><BsSearch /></div>
      <input className="relative / block / outline-none / / / peer " placeholder="Search..." />
      <div className="absolute bottom-0 right-0 left-0 translate-y-full z-10 / hidden flex-col gap-1 / rounded-xl / / bg-white peer-focus:flex">
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  )
}
export default Search
