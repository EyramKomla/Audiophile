import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import CartModal from "../Components/CartModal";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30 font-manrope`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <img src="\src\assets\logo.png" width={100}/>
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>

      <nav className="flex flex-col gap-y-6 font-manrope font-semibold text-sm">
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
    </div>
  );
}


function MobileHeader(){
    const isSmall = useMediaQuery('(max-width: 700px)')
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen((prev) => !prev)

    return (
        <div className={`w-screen ${isSmall ? "px-10" : "px-30"} text-primary-white`}>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

            <div className="w-full h-9 flex justify-between items-center">
                <div className="h-full w-40 flex items-center justify-between">
                    <button onClick={toggleSidebar}>
                        <FiMenu size={24}/>
                    </button>
                    <Link to="/">
                        <img src="\src\assets\logo.png" width={100}/>
                    </Link>
                </div>
                <CartModal/>
            </div>
        </div>
    )
}

function DesktopHeader(){
    return (
        <div className="w-screen px-30">
            <div className="w-full h-20 flex text-white justify-between items-center">
                <Link to="/">
                    <img src="\src\assets\logo.png" width={100}/>
                </Link>
                <nav className="flex gap-6 font-manrope font-semibold text-sm">
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
                
                <CartModal/>
            </div>
        </div>
    )
}

function Header() {
    const isMobile = useMediaQuery('(max-width: 1100px)')
  return isMobile ? <MobileHeader/> : <DesktopHeader/>
}

export default Header