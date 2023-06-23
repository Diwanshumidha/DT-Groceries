import Footer from "./Layout/Footer/Footer";


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx/Home";
import Faq from "./pages/FAQ/Faq";
import Contact_us from "./components/Contact_us/Contact_us";
import ErrorPage from "./pages/404/404";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./Layout/Cart/Cart";

const App = () => {
  return (
  <div className=" w-full min-h-screen ">
    <Cart/>
    <Routes>

      <Route path="/" element={<Home/>} ></Route>
      <Route path="/faq" element={<Faq/>} ></Route>
      <Route path="/contact" element={<Contact_us/>} ></Route>
      <Route path="/error" element={<ErrorPage/>} ></Route>         {/* Temporary  */}
      <Route path="/productdetail/:id" element={<ProductDetail/>} ></Route>      {/* Set Dynamic Path  */}




    </Routes>
    <Footer/>
    
  </div>
  
  )
};

export default App;
