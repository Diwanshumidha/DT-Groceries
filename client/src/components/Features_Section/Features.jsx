import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
const Features = () => {
  return (
    <section className="w-full my-8">
        <div className="heading flex container  max-w-[900px] flex-col   m-auto sm:px-5">
            
            <h3 className="  mx-auto text-center">We believe in a world well fed,<br className=' hidden sm:block'/> one where food is :</h3>
            <div className="grid mt-5 lg:mt-8 grid-cols-1 md:grid-cols-3 gap-2  mx-auto  ">
                <div className=" flex gap-3 py-4 px-5">
                    <div className=' text-xl '>
                        <WorkspacePremiumIcon className='!text-[3.5rem]'/>
                    </div>
                    <div>
                        <h5>Best Quality</h5>
                        <p>Etiam eu turpis tincidunt, vehicula mi ut</p>

                    </div>
                </div>
                <div className=" flex gap-3 py-4 px-5">
                    <div className=' text-xl '>
                        <WorkspacePremiumIcon className='!text-[3.5rem]'/>
                    </div>
                    <div>
                        <h5>Best Quality</h5>
                        <p>Etiam eu turpis tincidunt, vehicula mi ut</p>
                    </div>
                </div>
                <div className=" flex gap-3 py-4 px-5">
                    <div className=' text-xl '>
                        <WorkspacePremiumIcon className='!text-[3.5rem]'/>
                    </div>
                    <div>
                        <h5>Best Quality</h5>
                        <p>Etiam eu turpis tincidunt, vehicula mi ut</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Features