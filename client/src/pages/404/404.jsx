import Navbar from '../../Layout/Navbar/Navbar'
import error from '../../assets/error/error-404.png'
const ErrorPage = () => {
  return (
    
    <section className=" w-full h-[80vh] flex flex-col justify-center items-center">
        <Navbar variant='green'/>
        <img src={error} alt="" className=' w-72' />
        <h1 className=' text-primary-green'>404 - Not found!</h1>
        <p>This page could not be found.</p>
        <p>Continue to the Home Page</p>
    </section>
  )
}

export default ErrorPage