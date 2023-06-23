import Navbar from "../../Layout/Navbar/Navbar"
import Delivery_information from "../../components/Faq/Delivery_information/Delivery_information"
import Faq_Hero from "../../components/Faq/Faq_Hero/Faq_Hero"

const Faq = () => {
  return (
    <div className="faq min-h-screen ">
        <Navbar variant='green'/>
        <Faq_Hero subtitle="Faq's" title={["Any questions?","We’re here to help"]}/> {/* Title has two element because they have <br> between them */}
        <Delivery_information/>
        <div className="w-full my-10 flex flex-col items-center gap-4">
            <p className=" text-center text-step--1">Have a question not covered in the FAQ?</p>
            <button className=" px-4 py-2 bg-primary-green text-white rounded-sm ">Contact</button>
        </div>

    </div>
  )
}

export default Faq