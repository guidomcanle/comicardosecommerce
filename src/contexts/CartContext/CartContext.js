import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (bookToCart) => {
    const id = bookToCart.id;
    const isInCart = cart.find((bookToCart) => bookToCart.id === id);

    if (isInCart === undefined) {
      console.log("addItem");
      setCart([...cart, bookToCart]);
    } else {
      console.log("Ya tiene este libro en el cart");
      console.log(cart);
    }
  };

  const removeItem = (bookForRemove) => {
    const id = bookForRemove.id;
    const isInCart = cart.find((bookForRemove) => bookForRemove.id === id);

    if (isInCart !== undefined) {
      setCart(cart.filter((bookForRemove) => bookForRemove.id !== id));
      console.log(cart);
    } else {
      console.log("No está en el carrito este producto");
    }
    console.log(id);
  };

  const clear = () => {
    setCart([]);
  };

  useEffect(() => console.log(cart));

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
