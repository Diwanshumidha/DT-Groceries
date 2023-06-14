import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import Hero_Section from "./components/Hero_Section/Hero_Section";

const App = () => {
  return (
  <div className=" w-screen min-h-screen">
    <Navbar/>
    <Hero_Section/>
    <Footer/>
  </div>
  
  )
};

export default App;
