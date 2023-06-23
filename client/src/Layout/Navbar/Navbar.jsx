import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartI';


const Navbar = ({bgcolor='white', logocolor='green', linkscolor='black'}) => {
  const { open, setOpen } = useContext(CartContext);

  const handleCartClick = () => {
    console.log(open)
    setOpen(!open);
  };

  const [isscrolled, setisscrolled] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 1) {
      setisscrolled(true);
      
    } else {
      setisscrolled(false);
    }
  };
  window.addEventListener("scroll", changeColor, true);

  return (
    <>

    <motion.section 
          className={`w-full h-[80px] fixed top-0 left-0 z-30 Navbar ${`bg-${bgcolor}`}   ${!isscrolled?" bg-primary-green shadow-lg":""}`}
          animate={{ opacity: [0,1], y:['-100px','0px']}}
          transition={{ duration: 0.5 }}>
      <div className=" container px-4 justify-between lg:px-4   flex items-center  mx-auto  h-full">
        <div className=" flex gap-5 md:gap-7 lg:gap-9">
          <h4 className={`  font-bold  ${`text-${logocolor}`}`}>DT:Grocery</h4>
          <ul className={` gap-3 items-center hidden md:flex ${`text-${linkscolor}`}`}>
            <li>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
              <NavLink to="">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
        
        <div className= {`hidden md:flex gap-2  ${`text-${linkscolor}`}`}>
         
          <a href=""><SearchIcon/></a> 
          <a href=""><PersonOutlineIcon/></a>
          <a href=""><FavoriteBorderIcon/></a>
          <a onClick={()=>{handleCartClick()}}><LocalMallIcon/></a>
        </div>
        <div className=' block md:hidden'>
            <a>
            <MenuIcon/>
            </a>
        </div>
      </div>
      <div className=' absolute flex w-full bg-white hidden'>
    <ul className={` gap-3 items-center hidden md:flex flex-col text-black`}>
            <li>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
              <NavLink to="">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
    </div>
    </motion.section>
   
    </>
  );
};

export default Navbar;
