import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

function Cart() {
  const { cart, clear } = useCart();

  return (
    <>
      <div>
        {cart.length ? (
          cart.map((book) => (
            <CartItem
              key={book.book.id}
              books={book.book}
              quantity={book.counter}
            />
          ))
        ) : (
          <CartEmpty />
        )}
      </div>
      {cart === undefined
        ? () => (
            <div>
              <button onClick={clear}>borrar todo</button>
            </div>
          )
        : ""}
    </>
  );
}

export default Cart;
