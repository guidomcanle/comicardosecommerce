import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = ({ book, counter, id }) => {
    setCart((prev) => {
      const isInCart = prev.find((cart) => cart.id === id);
      let quantity = counter;
      console.log(counter);
      if (isInCart) {
        return cart.map((currentBook) =>
          currentBook.id === id
            ? { book, counter: currentBook.counter + quantity, id: book.id }
            : currentBook
        );
      }
      return [...prev, { book, counter: quantity, id: book.id }];
    });

    console.log(cart);
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
