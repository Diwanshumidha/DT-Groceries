import Navbar from "../../Layout/Navbar/Navbar"
import Faq_Hero from "../Faq/Faq_Hero/Faq_Hero"
import Adress from "./Adress"
import Getintouch from "./Getintouch"
import Maps from "./Maps"

const Contact_us = () => {
  return (
    <div className="faq min-h-screen ">
    <Navbar variant='green'/>
    <Faq_Hero subtitle="Need Help" title={["Haven’t found","what you’re looking for? Contact us"]}/> 
    <Maps/>
    <div className="grid lg:grid-cols-3 grid-cols-1  container mx-auto mt-5">
        <div className=" col-span-1 h-full  order-1 md:order-1"><Adress/></div>
        <div className=" col-span-2 h-full  lg:order-1"><Getintouch/></div>
    </div>
    </div>
  )
}

export default Contact_us