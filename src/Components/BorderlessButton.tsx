import { MdKeyboardArrowRight } from 'react-icons/md';

function BorderlessButton() {
  return (
    <button className="h-[18px] w-15 flex justify-between items-center group">
        <p className='font-manrope text-xs tracking-widest font-bold opacity-50 transition duration-300 group-hover:text-secondary-brown group-hover:opacity-100'>SHOP</p>
        <MdKeyboardArrowRight size={15} className='text-primary-brown'/>
    </button>
  )
}

export default BorderlessButton