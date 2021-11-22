import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

function Cart() {
  const { cart, clear } = useCart();

  const total = cart.reduce(
    (counter, x) => counter + x.price * cart.counter,
    0
  );

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

      {cart.length > 0 ? (
        <>
          <div className="cartItemDiv">
            <div className="cartItemDiv--box">
              <p className="cartItemDiv--text">total</p>
              <p className="cartItemDiv--text">{total}</p>
              <button onClick={clear} className="cartItemDiv--text">
                borrar todo
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
