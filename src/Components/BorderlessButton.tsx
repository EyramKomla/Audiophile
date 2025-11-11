import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

type BorderlessButtonProps = {
  src: string,
}
function BorderlessButton({src}: BorderlessButtonProps) {
  const source = "/" + src;
  return (
    <Link to = {source}>
      <button className="h-[18px] w-15 flex justify-between items-center group">
          <p className='font-manrope text-xs tracking-widest font-bold opacity-50 transition duration-300 group-hover:text-secondary-brown group-hover:opacity-100'>SHOP</p>
          <MdKeyboardArrowRight size={15} className='text-primary-brown'/>
      </button>
    </Link>
    
  )
}

export default BorderlessButton