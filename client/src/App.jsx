import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import Features from "./components/Features_Section/Features";
import Hero_Section from "./components/Hero_Section/Hero_Section";
import Plan from "./components/Plan_Section/Plan";
import Product from "./components/Products_section/Product";

const App = () => {
  return (
  <div className=" w-full min-h-screen">
    <Navbar/>
    <Hero_Section/>
    <Features/>
    <Product/>
    <Plan/>
    <Footer/>
  </div>
  
  )
};

export default App;
