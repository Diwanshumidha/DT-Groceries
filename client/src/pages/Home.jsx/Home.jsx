import Hero_Section from '../../components/Hero_Section/Hero_Section'

import Product from '../../components/Products_section/Product'
import Plan from '../../components/Plan_Section/Plan'
import Testimonials from '../../components/Testimonials/Testimonials'
import Navbar from '../../Layout/Navbar/Navbar'
import Features from '../../components/Features_Section/Features'
import Authentication from '../Authentication/Authentication'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero_Section/>
    <Features/>
    <Product/>
    <Plan/>
    <Testimonials/>
    <Authentication/>
    
    </>
  )
}

export default Home