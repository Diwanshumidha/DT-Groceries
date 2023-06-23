import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InventoryIcon from "@mui/icons-material/Inventory";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { useContext, useState } from "react";
import "./Product_Detail_Com.css";
import { CartContext } from "../../Contexts/CartI";

const Product_Detail_component = ({ Product }) => {
  const { addToCart, setOpen, convertinr } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const item = {
      ...Product,
      quantity: quantity,
    };
    addToCart(item);
    setOpen(true);
  };

  return (
    <section className="container max-w-[500px] md:max-w-[600px] lg:max-w-[revert] mx-auto lg:mt-14 ">
      <div className="w-full  max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div
          className="w-full lg:w-[470px] mx-auto h-[360px] bg-cover bg-no-repeat rounded-lg "
          style={{ backgroundImage: `url(${Product.img_link})` }}
        ></div>
        <div className="mt-8 lg:my-0 px-4 grid gap-2">
          <h3 className="font-medium">{Product.name}</h3>
          <div className="text-primary-green">
            {Array.from({ length: Math.round(Product.Rating) }, (_, index) => (
              <Star key={index} checked={true} />
            ))}
            {Array.from(
              { length: 5 - Math.round(Product.Rating) },
              (_, index) => (
                <Star
                  key={index + Math.round(Product.Rating)}
                  checked={false}
                />
              )
            )}
            <span>({Product.Rating})</span>
          </div>
          <h6>{convertinr(Product.price)} Per Kg</h6>
          <p>{Product.Description}</p>
          <div className="">
            <h6>Quantity</h6>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <Quantity_com onChange={handleQuantityChange} />
              <div className="flex gap-5 items-start sm:items-center">
                <button className="bg-black text-white px-8 h-10 rounded-lg" onClick={()=>{handleAddToCart() }}>
                  Add To Cart
                </button>
                <button className="bg-primary-green text-white px-12 h-10 rounded-lg">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <InventoryIcon />
            <span>
              60 - Days Returns{" "}
              <a className="underline cursor-pointer">Learn More</a>{" "}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DirectionsBoatFilledIcon />
            <span>Free Shipping Over {convertinr(300)} </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product_Detail_component;

const Star = ({ checked }) => {
  return checked ? <StarIcon /> : <StarBorderIcon />;
};

export const Quantity_com = ({ onChange }) => {
  const [quantityValue, setQuantityValue] = useState(1);

  const handleIncrement = () => {
    setQuantityValue((prevValue) => prevValue + 1);
    onChange(quantityValue + 1); // Notify parent component about quantity change
  };

  const handleDecrement = () => {
    if (quantityValue > 1) {
      setQuantityValue((prevValue) => prevValue - 1);
      onChange(quantityValue - 1); // Notify parent component about quantity change
    }
  };

  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={handleDecrement}
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center !w-[4ch] bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default grid place-content-center items-center justify-center text-gray-700 outline-none"
          name="custom-input-number"
          value={quantityValue}
          readOnly
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={handleIncrement}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
