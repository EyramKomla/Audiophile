import { BsCart3 } from "react-icons/bs"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="w-full px-30">
        <div className="w-full h-20 flex text-white justify-between items-center border-b border-[#F1F1F1]">
            <img src="src\assets\logo.png" width={100}/>
            <nav className="flex gap-6 font-manrope font-semibold text-[14px]">
                <NavLink 
                    to="/"
                    end
                    className={({isActive}) => `hover:text-primary-brown transition duration-300 ${isActive ? "text-primary-brown" : "text-gray-200"}`}
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/headphones"
                    className={({isActive}) => `hover:text-primary-brown transition duration-300 ${isActive ? "text-primary-brown" : "text-gray-200"}`}>
                    HEADPHONES
                </NavLink>
                <NavLink
                    to="/speakers"
                    className={({isActive}) => `hover:text-primary-brown transition duration-300 ${isActive ? "text-primary-brown" : "text-gray-200"}`}>
                    SPEAKERS
                </NavLink>
                <NavLink 
                    to="/earphones"
                    className={({isActive}) => `hover:text-primary-brown transition duration-300 ${isActive ? "text-primary-brown" : "text-gray-200"}`}>
                    EARPHONES
                </NavLink>
            </nav>
            <BsCart3 size={24}/>
        </div>
    </div>
  )
}

export default Header