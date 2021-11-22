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

  /*const total = cart.reduce((quantity, x) => quantity + x.price * x.counter, 0);*/

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const db = getFirestore();
  const orders = collection(db, "orders");

  const handleInputChange = async (event) => {
    try {
      event.preventDefault();
      const newOrder = {
        buyer: userInfo,
        items: cart,
        date: orderDate,
        /*total: total,*/
      };

      const results = await orders.add(newOrder);
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
              <p className="cartItemDiv--text">{}</p>
              <button onClick={clear} className="cartItemDiv--text">
                borrar todo
              </button>
            </div>
          </div>
          <div>
            <form onSubmit={handleInputChange}>
              <label for="POST-name">Nombre y apellido:</label>
              <Form setUserInfo={setUserInfo} name="name" userInfo={userInfo} />
              <label for="POST-mail">Mail:</label>
              <Form setUserInfo={setUserInfo} name="mail" userInfo={userInfo} />
              <label for="POST-tel">Teléfono</label>
              <Form setUserInfo={setUserInfo} name="tel" userInfo={userInfo} />
              <label for="POST-address">Dirección del envío:</label>
              <Form
                setUserInfo={setUserInfo}
                name="address"
                userInfo={userInfo}
              />
              <button type="submit">Enviar</button>
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
