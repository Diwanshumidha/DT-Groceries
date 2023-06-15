import { cards, Product_categories } from "./Product_constant";
import "./Product.css";
import { motion } from 'framer-motion'
import { useState } from "react";


const Product = () => {
  const [Filterid, setFilterid] = useState(1);
  const filtered_array = cards.filter((card) => card.type === Filterid).slice(0, 3);
  
  return (
    <section className="w-full my-8 lg:my-14">
      <div className="heading flex container max-w-[900px] flex-col gap-4 m-auto sm:px-5">
        <motion.h3 
        // initial={{opacity:'0'}}
        whileInView={{opacity:[0,1]}}
        transition={{duration:'1'}}
        className="mx-auto text-center mb-3">
          Actually healthy.
          <br /> Undeniably delicious.
        </motion.h3>
        <div className="filter flex gap-5 mx-auto">
          {Product_categories.map((item) => {
            console.log(item.id, Filterid);
            return (
              <div key={item.id}>
                <span
                  className={`cursor-pointer leading-[1.5] w-full ${
                    Filterid === item.id
                      ? "text-primary-green border-b-2 border-red-600 border-solid "
                      : ""
                  }`}
                  onClick={() => {
                    setFilterid(item.id);
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
        <motion.div
        layout
        className="cards p grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {filtered_array.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              img_link={item.img_link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;

const Card = ({ name, price, img_link }) => {
  return (
    <div className="rounded max-w-[450px]">
      <motion.img className="w-full card_image"  animate={{opacity:[0,0,1]}} transition={{duration:'0.7'}} src={img_link} alt="Vegetable" />
      <div className="px-6 py-4 w-full">
        <div className="mb-2 text-center">
          <motion.h6
           animate={{x:['-100px','0px'],opacity:[0,1]}}
           transition={{delay:'0.4'}}
           className="font-bold">{name}</motion.h6>
        </div>
        <motion.div className="mb-2 text-center" initial={false} transition={{delay:'0.5'}} animate={{x:['-100px','0px'],opacity:[0,1]}}>
          <span  className="text-step--1 text-primary-green">${price}.00</span>
        </motion.div>
      </div>
    </div>
  );
};
