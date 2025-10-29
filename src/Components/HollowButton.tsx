type HollowButtonProps = {
    text:string,
}
function HollowButton({text}: HollowButtonProps) {
  return (
    <button className="w-40 h-12 hover:bg-primary-black hover:text-white transition duration-300 border-2 flex justify-center items-center text-primary-black">
        <p className="text-xs font-semibold tracking-[2px]">{text}</p>
    </button>
  )
}

export default HollowButton