import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import Form from "../Form/Form";
import { useState } from "react/cjs/react.development";

import { getFirestore } from "../Firebase/index";
import { collection } from "firebase/firestore";

function Cart() {
  const { cart, clear } = useCart();
  const [userInfo, setUserInfo] = useState({
    name: "",
    mail: "",
    tel: "",
    address: "",
  });

  const total = cart.reduce(
    (counter, x) => counter + x.price * cart.counter,
    0
  );

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const handleInputChange = async (event) => {
    try {
      event.preventDefault();
      const newOrder = {
        buyer: userInfo,
        item: cart,
        date: orderDate,
        /*total: cart.map(),*/
      };

      const results = await ordersCollection.add(newOrder);
      setUserInfo({
        name: "",
        email: "",
        tel: "",
        address: "",
      });
      console.log(results);
    } catch (err) {
      console.log(err);
    }
  };

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
          <div>
            <form onSubmit={handleInputChange}>
              <label for="POST-name">Nombre y apellido:</label>
              <Form setUserInfo={setUserInfo} name="name" buyer={userInfo} />
              <label for="POST-mail">Mail:</label>
              <Form setUserInfo={setUserInfo} name="mail" buyer={userInfo} />
              <label for="POST-tel">Teléfono</label>
              <Form setUserInfo={setUserInfo} name="tel" buyer={userInfo} />
              <label for="POST-address">Dirección del envío:</label>
              <Form setUserInfo={setUserInfo} name="address" buyer={userInfo} />
              <input type="submit">Enviar</input>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
