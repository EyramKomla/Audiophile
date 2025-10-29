type ButtonProps = {
    text: string;
}
function Button({text}: ButtonProps) {
  return (
    <button className='w-40 h-10 bg-primary-brown hover:bg-secondary-brown transition 
        duration-300 flex justify-center items-center'>
        <p className='text-xs font-semibold tracking-[2px] text-primary-white'>{text}</p>
    </button>
  )
}

export default Button