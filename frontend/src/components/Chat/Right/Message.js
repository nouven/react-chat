function Message({ value }) {
  if (value.isMe) {
    return (
      <div className="relative / flex justify-end w-full">
        <div className="relative / flex items-end gap-1 / max-w-[60%] / group">
          <div className="relative / flex-1 / border p-[2px] rounded-xl ">{value.content}</div>
          <div className="absolute left-0 bottom-[2px] -translate-x-full / hidden / w-fit rounded-xl border p-[2px] / text-xs font-light / group-hover:block">Tue Jul 19 01:22</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative / flex w-full">
        <div className="relative / flex items-end gap-1 / max-w-[60%] / group ">
          <div className="relative / / h-[20px] w-[20px] rounded-full overflow-hidden">
            <img className="object-cover" src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
          </div>
          <div className="relative / flex-1 / border p-[2px] rounded-xl ">{value.content}</div>
          <div className="absolute right-0 bottom-[2px] translate-x-full / hidden / w-fit rounded-xl border p-[2px] / text-xs font-light / group-hover:block">Tue Jul 19 01:22</div>
        </div>
      </div>
    )
  }
}
export default Message
