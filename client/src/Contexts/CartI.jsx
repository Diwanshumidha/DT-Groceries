import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Item already exists in the cart, update the quantity
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: item.quantity,
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      // Item doesn't exist in the cart, add it
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const incrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const getQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };
  const convertinr = (amount) =>{
    let rupee = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
  });
  return rupee.format(amount)
  }


  return (
    <CartContext.Provider
      value={{
        open,
        setOpen,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        incrementQuantity,
        decrementQuantity,
        getQuantity,
        convertinr
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
