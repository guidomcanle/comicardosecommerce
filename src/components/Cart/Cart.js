import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

function Cart() {
  const { cart } = useCart();

  return (
    <>
      <div>
        {cart.length ? (
          cart.map((book) => (
            <CartItem
              key={book.book.id}
              books={book.book}
              quantity={book.quantity}
            />
          ))
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
}

export default Cart;
