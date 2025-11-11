import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"

function DesktopFooter() {
    return (
        <div className="text-primary-white w-screen h-[365px] py-10 px-30 flex 
            max-md:flex-col ">
            <div className="w-[50%] flex flex-col gap-y-7 px-5
                max-md:w-screen">
                <img src="\src\assets\logo.png" width={100}/>
                <p className="opacity-50 text-[15px]">Audiophile is an all in one stop to fulfill your audio needs.
                    We're a small team of music lovers and sound specialists who are devoted
                    to helping you get the most out of personal audio. Come and visit our demo - 
                    we're open 7 days a week. 
                </p>
                <h6 className="opacity-50">Copyright 2021. All Rights Reserved</h6>
            </div>
            <div className="w-[50%] max-md:w-screen flex flex-col justify-between gap-y-10 px-5 py-2">
                <nav className="flex justify-around font-manrope font-bold tracking-[2px] text-[13px]">
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

function MobileFooter(){
    const isSmall = useMediaQuery('(max-width: 700px)');
    return (
        <div className={`w-screen flex flex-col gap-y-10 pb-10 text-primary-white ${isSmall ? "text-center px-0" : " px-30"}`}>
            <img src="\src\assets\logo.png" width={100} className={isSmall ? "mx-auto" : ""}/>
            <div className="w-full">
                <nav className={`flex ${isSmall ? "flex-col gap-y-3 items-center" : ""} justify-around font-manrope font-bold tracking-[2px] text-[13px]`}>
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
            </div>
            <p className="opacity-50 text-[15px]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted
                to helping you get the most out of personal audio. Come and visit our demo - 
                we're open 7 days a week. 
            </p>
            <div className="w-full flex justify-between">
                <h6 className="opacity-50">Copyright 2021. All Rights Reserved</h6>
                <div className="w-[304px] h-[50%] flex justify-end items-start gap-x-4 pr-10">
                    <FaFacebookSquare size={24} className="hover:text-primary-brown transition duration-300"/>
                    <FaTwitter size={24} className="hover:text-primary-brown transition duration-300"/>
                    <FaInstagram size={24 } className="hover:text-primary-brown transition duration-300"/>    
                </div>
            </div>
        </div>
    )
}

function Footer() {
    const isMobile = useMediaQuery("(max-width: 1100px)");
  return isMobile ? <MobileFooter/> : <DesktopFooter/>
}

export default Footer