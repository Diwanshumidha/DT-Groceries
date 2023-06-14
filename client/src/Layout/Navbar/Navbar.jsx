import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { motion } from "framer-motion"

const Navbar = () => {

  
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
    <motion.section 
          className={`w-full h-[80px] fixed z-30 Navbar ${!isscrolled?" bg-primary-green":""} `}
          initial={{ opacity: 0, y:'-100px' }}
          animate={{ opacity: 1, y:'0px' }}
          transition={{ duration: 0.5 }}>
      <div className=" container px-4 justify-between lg:px-4   flex items-center  mx-auto  h-full">
        <div className=" flex gap-5 md:gap-7 lg:gap-9">
          <h4 className={`  font-bold ${isscrolled?"text-primary-green":" text-white"}`}>DT:Grocery</h4>
          <ul className={` gap-3 items-center hidden md:flex ${!isscrolled?"text-black":" text-white"}`}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
        <div className= {`hidden md:flex gap-2 ${!isscrolled?"text-black":" text-white"}`}>
          <a href=""><SearchIcon/></a>
          <a href=""><PersonOutlineIcon/></a>
          <a href=""><FavoriteBorderIcon/></a>
          <a href=""><LocalMallIcon/></a>
        </div>
        <div className=' block md:hidden'>
            <a>
            <MenuIcon/>
            </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
