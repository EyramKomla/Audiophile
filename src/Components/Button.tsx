import { Link } from "react-router-dom";

type ButtonProps = {
    text: string,
    index: number,
    category: string,
}


function Button({text, index, category}: ButtonProps) {
  return (
    <Link to={`/${category}/${index}`}>
        <button className='w-40 h-10 bg-primary-brown hover:bg-secondary-brown transition 
            duration-300 flex justify-center items-center'>
            <p className='text-xs font-semibold tracking-[2px] text-primary-white'>{text}</p>
        </button>
    </Link>
    
  )
}

export default Button