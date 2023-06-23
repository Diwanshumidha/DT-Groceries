import { Breadcrumbs, Typography } from "@mui/material";
import Navbar from "../../Layout/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import Product_Detail_component from "../../components/Product_Detail_component/Product_Detail_component";
import Product_Details_Description from "../../components/Product_Detail_component/Product_Details_Description";
import { motion } from 'framer-motion'
import { useContext, useEffect } from "react";
import { ProductContext } from "../../Contexts/Products";
const ProductDetail = () => {
  
  const { id } = useParams();
  const { products, getProductById } = useContext(ProductContext);
  const product = getProductById(Number(id));
  console.log(product)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div>
      <Navbar bgcolor="white" logocolor="primary-green" linkscolor="black" />
      <h2>Sorry We Cant Find The Product</h2>
    </div>; // Handle the case when the product is not found
  }
  return (
    <section className=" w-full pt-[80px]">
      <Navbar bgcolor="white" logocolor="primary-green" linkscolor="black" />
      <div className="breadcrumb w-full h-[35px] flex items-center pl-5 bg-gray-200">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Products
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>
      </div>
      <Product_Detail_component Product={product} />
      <Product_Details_Description Product={product} />
      <div className=" my-24 py-6">
        <div className="container mx-auto">
          <h3 className=" text-center text-primary-green">You may also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-11 max-w-[1400px] mx-auto place-items-center">
    {products.slice(0, 4).map((product) => (
      <Card
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        img_link={product.img_link}
      />
    ))}
  </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

const Card = ({ name, price, img_link, id }) => {
  return (
    <div className="rounded max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center">
      <Link to={`/productdetail/${id}`}>
      <motion.img
        className="lg:w-full w-[270px] h-auto card_image"
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: "0.7" }}
        src={img_link}
        alt="Vegetable"
      />
      <div className="px-6 py-4 w-full">
        <div className="mb-2 text-center">
          <motion.h6
            animate={{ x: ["-100px", "0px"], opacity: [0, 1] }}
            transition={{ delay: "0.4" }}
            className="font-bold"
          >
            {name}
          </motion.h6>
        </div>
        <motion.div
          className="mb-2 text-center"
          initial={false}
          transition={{ delay: "0.5" }}
          animate={{ x: ["-100px", "0px"], opacity: [0, 1] }}
        >
          <span className="text-step--1 text-primary-green">{price}</span>
        </motion.div>
      </div>
      </Link>
    </div>
  );
};
