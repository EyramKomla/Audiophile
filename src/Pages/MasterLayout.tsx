import { Outlet } from "react-router-dom"
import Footer from "../Sections/Footer"
import Header from "../Sections/Header"
import ScrollUtility from "../Components/ScrollUtility";


function MasterLayout() {
  return (
    <div className='bg-primary-black w-full min-h-screen'>
      <ScrollUtility/>
      <Header/>
      <div className="overflow-x-hidden">

        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MasterLayout;