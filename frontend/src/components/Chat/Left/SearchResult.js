function SearchResult() {
  const handleClick = () => {
    console.log("clicked search result!!")
  }
  return (
    <div onClick={handleClick} className="relative / flex items-center gap-1 / py-[2px] border rounded-xl / / / cursor-pointer ">
      <div className="relative / block / w-8 h-8 rounded-full overflow-hidden">
        <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
      </div>
      <div className="relative / flex flex-col flex-1 ">
        <p>nouven</p>
        <p className="relative / block / / text-sm font-light /">ooouvnouven@gmail.com</p>
      </div>
    </div>
  )
}
export default SearchResult
