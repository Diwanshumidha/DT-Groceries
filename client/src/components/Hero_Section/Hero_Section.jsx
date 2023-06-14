import background from '../../assets/Home/bg.jpg'
import {motion} from 'framer-motion'
const Hero_Section = () => {
  return (
    <div className=" w-full h-screen items-center flex bg-cover bg-center bg-fixed " style={{ backgroundImage:`url(${background})` }}>
        <div className="overlay w-screen h-screen absolute left-0 top-0 bg-black opacity-30 z-1"></div>
        <div className="container mx-auto mt-[80px]  ">
            <div className="content max-w-[600px] flex flex-col gap-5    px-7 lg:px-12 z-20">
                <motion.h1 
                    initial={{ opacity: 0, x:'-100px' }}
                    animate={{ opacity: 1, x:'0px' }}
                    transition={{ duration: 1,delay:0.5 }}
                    className="text-white font-medium z-20 ">BELIEVE IN FRUITS<span className=' text-primary-green'>+</span> <br></br> VEGGIES</motion.h1>

                <p className="text-white z-20 2xl:text-step-0 text-step--1  ">Elevated, organic cotton basics. Impeccable fit. Compromise-free.</p>
                <motion.button 
                      whileHover={{scale:1.1,borderRadius:0}}
                      whileTap={{scale:0.9}}
                      className=" bg-primary-green font-bold text-white w-max py-2 px-3 lg:px-4 lg:py-2.5 rounded-md z-20 ">Shop Now</motion.button>
            </div>
        </div>
    </div>
  )
}

export default Hero_Section