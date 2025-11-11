import { Link } from "react-router-dom"
type BlackButtonProps = {
    text:string;
    index: number;
    category: string;
}
function BlackButton({text, index, category}: BlackButtonProps) {
  return (
    <Link to={`/${category}/${index}`}>
      <button className='w-40 h-10 bg-primary-black hover:bg-gray-800 transition 
          duration-300 flex justify-center items-center text-white'>
          <p className='text-xs font-semibold tracking-[2px]'>{text}</p>
      </button>
    </Link>
  )
}

export default BlackButton