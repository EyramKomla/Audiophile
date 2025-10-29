type BlackButtonProps = {
    text:string;
}
function BlackButton({text}: BlackButtonProps) {
  return (
    <button className='w-40 h-10 bg-primary-black hover:bg-gray-800 transition 
        duration-300 flex justify-center items-center text-white'>
        <p className='text-xs font-semibold tracking-[2px]'>{text}</p>
    </button>
  )
}

export default BlackButton