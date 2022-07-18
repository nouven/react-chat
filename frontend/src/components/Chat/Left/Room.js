function Room() {
  const style = {
    img: " absolute / block / w-5 h-5 rounded-full overflow-hidden / "
  }
  const handleClick = () => {
    console.log("clicked!!");
  }
  return (
    <div onClick={handleClick} className="relative / flex items-center gap-1 / border p-[2px] rounded-xl / / / cursor-pointer">
      <div className="relative / block / h-8 w-8 / / ">
        <div className={`${style.img} right-0 top-0`}>
          <img className='object-cover' src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
        </div>
        <div className={`${style.img} left-0 bottom-0`}>
          <img className='object-cover' src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
        </div>
      </div>
      <div className="relative / flex flex-col flex-1 / ">
        <p>nouven</p>
        <div className="relative / flex justify-between / / font-light text-xs">
          <p>last message</p>
          <p>1d ago</p>
        </div>
      </div>
    </div>
  )
}
export default Room
