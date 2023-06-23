import  { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ProductContext } from '../../Contexts/Products';


import "./Product.css";
import { Link, unstable_HistoryRouter } from 'react-router-dom';

const Product = () => {
  
  const { products, Product_categories:categories } = useContext(ProductContext);
  console.log(products,categories)
  const [filterId, setFilterId] = useState(1);
  const filteredProducts = products.filter((product) => product.type === filterId).slice(0, 3);
  
  return (
    <section className="w-full my-8 lg:my-14">
      <div className="heading flex container max-w-[900px] flex-col gap-4 m-auto sm:px-5">
        <motion.h3 
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="mx-auto text-center mb-3"
        >
          Actually healthy.
          <br /> Undeniably delicious.
        </motion.h3>
        <div className="filter flex gap-5 mx-auto">
          {categories.map((category) => (
            <div key={category.id}>
              <span
                className={`cursor-pointer leading-[1.5] w-full ${
                  filterId === category.id
                    ? "text-primary-green border-b-2 border-red-600 border-solid "
                    : ""
                }`}
                onClick={() => {
                  setFilterId(category.id);
                }}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
        <motion.div layout className="cards p grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img_link={product.img_link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;

const Card = ({ id,name, price, img_link }) => {
  
  return (
    <div className="rounded max-w-[450px]">
      <Link to={`/productdetail/${id}`} className="card-link">
        <motion.img className="w-full card_image" animate={{ opacity: [0, 0, 1] }} transition={{ duration: '0.7' }} src={img_link} alt="Vegetable" />
        <div className="px-6 py-4 w-full">
          <div className="mb-2 text-center">
            <motion.h6
              animate={{ x: ['-100px', '0px'], opacity: [0, 1] }}
              transition={{ delay: '0.4' }}
              className="font-bold"
            >
              {name}
            </motion.h6>
          </div>
          <motion.div className="mb-2 text-center" initial={false} transition={{ delay: '0.5' }} animate={{ x: ['-100px', '0px'], opacity: [0, 1] }}>
            <span className="text-step--1 text-primary-green">${price}</span>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};
