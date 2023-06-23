
const Faq_Hero = ({subtitle,title}) => {
  return (
    <section className=" w-full md:px-7 md:min-h-[60vh] items-center min-h-[90vh] lg:min-h-[60vh] justify-center sm:min-h-[80vh] bg-primary-green pt-[80px] flex flex-col  sm:px-3">
        <p className="text-center">{subtitle}</p>
        <h2 className=" text-center text-white max-w-[25rem] ">{title[0]}<br/>{title[1]}</h2>
    </section>
  )
}

export default Faq_Hero