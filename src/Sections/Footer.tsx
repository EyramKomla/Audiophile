import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="bg-primary-black text-primary-white w-full h-[365px] py-10 px-30 flex">
        <div className="w-[50%] flex flex-col gap-y-7 px-5">
            <img src="src\assets\logo.png" width={100}/>
            <p className="opacity-50 text-[15px]">Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted
                to helping you get the most out of personal audio. Come and visit our demo - 
                we're open 7 days a week. 
            </p>
            <h6 className="opacity-50">Copyright 2021. All Rights Reserved</h6>
        </div>
        <div className="w-[50%] flex flex-col justify-between gap-y-10 px-5 py-2">
            <nav className="flex gap-x-16 font-manrope font-bold tracking-[2px] text-[13px]">
                <Link to="/" className="hover:text-primary-brown transition duration-300">
                    HOME
                </Link>
                <Link to="/headphones" className="hover:text-primary-brown transition duration-300">
                    HEADPHONES
                </Link>
                <Link to="/speakers" className="hover:text-primary-brown transition duration-300">
                    SPEAKERS
                </Link>
                <Link to="/earphones" className="hover:text-primary-brown transition duration-300">
                    EARPHONES
                </Link>
            </nav>
            <div className="w-full h-[50%] flex justify-end items-start gap-x-4 pr-10">
                <FaFacebookSquare size={24} className="hover:text-primary-brown transition duration-300"/>
                <FaTwitter size={24} className="hover:text-primary-brown transition duration-300"/>
                <FaInstagram size={24 } className="hover:text-primary-brown transition duration-300"/>    
            </div>
        </div>
    </div>
  )
}

export default Footer