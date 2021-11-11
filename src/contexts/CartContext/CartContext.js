import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (libro) => {
    console.log("addItem");
    setCart(...[cart, libro]);
    console.log(cart);
  };

  const removeItem = (libro) => {};

  const clear = () => {};

  const isInCart = () => {};
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
