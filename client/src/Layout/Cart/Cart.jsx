import { useContext, useState } from "react";
import { Quantity_com } from "../../components/Product_Detail_component/Product_Detail_component";
import { CartContext } from "../../Contexts/CartI";

const Cart = () => {
  const { open, setOpen, cartItems, removeFromCart, getTotalPrice,convertinr } = useContext(CartContext);
  const calculateProgressWidth = () => {
    const totalPrice = getTotalPrice();
    const freeShippingThreshold = 200;
    const percentage = (totalPrice / freeShippingThreshold) * 100;
    return Math.min(percentage, 100) + "%"; // Limit the progress bar width to 100%
  };

  return (
    <section
      className={`w-full p-4 pt-5 pr- max-w-[400px] h-screen bg-white z-[300] fixed  ${
        open ? "right-[0px]" : "right-[-400px]"
      } transition-all`}
    >
      <div className=" w-full  flex justify-between ">
        <h5 className=" ">Your Cart ({cartItems.length})</h5>
        <h5 onClick={()=>{setOpen(false)}}>X</h5>
      </div>
      <div className="my-4 flex flex-col gap-4">
        <span>Free Shipping on orders over $200.00</span>
        <div className="h-2 w-full bg-gray-300 rounded-lg">
          <div
            className="h-2 bg-primary-green rounded-lg"
            style={{ width: `${calculateProgressWidth()}` }}
          ></div>
        </div>
      </div>
      <div className=" w-full overflow-y-scroll h-[calc(100vh-250px)] flex flex-col gap-3 ">
        {cartItems.map((item)=>(
              <Cart_Item key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} image={item.img_link}  removeFromCart={removeFromCart}/>
        ))}
      </div>
      <div className=" absolute bottom-0 w-full  h-24 ">
          <div className=" flex justify-between">
              <h6 className=" font-semibold">Subtotal:</h6>
              <h6 className=" mr-6">{convertinr(getTotalPrice().toFixed(2))}</h6>
          </div>
          <div>
            <button className=" bg-primary-green text-white py-3 w-[94%] mt-4 rounded-sm">
              Checkout
            </button>
          </div>

    </div>
    
    </section>
  );
};

export default Cart;

const Cart_Item = ({ name, price, quantity, image , id, removeFromCart  }) => {
  
  return (
    <div className=" flex gap-3 ">
      <div className=" w-[120px] h-[150px] bg-black">
        <img src={image} alt="" width={"100%"} height={"100%"} />
      </div>
        <div className="flex-grow p-3">
      <div className=" flex justify-between">
        <span className=" ">{name}</span>
        <span onClick={()=>{removeFromCart(id)}} >X</span>
      </div>
      <div>
        <Quantity id={id}/>
      </div>
      </div>
    </div>
  );
};



const Quantity = ({ id }) => {
  const { incrementQuantity, decrementQuantity, getQuantity } = useContext(CartContext);
  const quantity = getQuantity(id);

  const handleIncrement = () => {
    incrementQuantity(id);
  };

  const handleDecrement = () => {
    decrementQuantity(id);
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
          value={quantity}
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

