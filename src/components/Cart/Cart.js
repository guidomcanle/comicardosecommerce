import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import Form from "../Form/Form";
import { useState } from "react/cjs/react.development";
import { getFirestore } from "../Firebase/index";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

function Cart() {
  const { cart, clear } = useCart();
  const [userInfo, setUserInfo] = useState({
    name: "",
    mail: "",
    tel: "",
    address: "",
  });

  const total = cart.reduce(
    (x, items) => x + items.book.price * items.counter,
    0
  );

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const db = getFirestore();

  const handleInputChange = async (event) => {
    try {
      event.preventDefault();
      setUserInfo({
        name: "",
        email: "",
        tel: "",
        address: "",
      });
      const results = await addDoc(collection(db, "orders"), {
        buyer: userInfo,
        items: cart,
        date: orderDate,
        total: total,
      });

      console.log(results);
      clear();
    } catch (err) {
      console.log(err);
    }

    cart.forEach((items) => {
      const bookRef = doc(db, "items", items.book.id);
      console.log(items.book.id, items.book.stock, items.counter);
      updateDoc(bookRef, { stock: items.book.stock - items.counter });
    });

    alert(
      "Le estaremos enviando por mail los pasos a seguir. Cualquier inconveniente, contactarse con nosotros por nuestra casilla de mails."
    );
  };

  return (
    <>
      <div className="cartDiv">
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

        {cart.length > 0 ? (
          <>
            <div className="cartItemDiv">
              <div className="cartItemDiv--box">
                <p className="cartItemDiv--text">total</p>
                <p className="cartItemDiv--text">${total}</p>
                <button onClick={clear} className="cartItemDiv--text buttonTo">
                  borrar todo
                </button>
              </div>
            </div>
            <div className="cartItemDiv__form">
              <form
                className="cartItemDiv__form--styles"
                onSubmit={handleInputChange}
              >
                <label>Nombre y apellido:</label>
                <Form
                  setUserInfo={setUserInfo}
                  name="name"
                  userInfo={userInfo}
                />
                <label>Mail:</label>
                <Form
                  setUserInfo={setUserInfo}
                  name="mail"
                  userInfo={userInfo}
                />
                <label>Teléfono</label>
                <Form
                  setUserInfo={setUserInfo}
                  name="tel"
                  userInfo={userInfo}
                />
                <label>Dirección del envío:</label>
                <Form
                  setUserInfo={setUserInfo}
                  name="address"
                  userInfo={userInfo}
                />
                <button type="submit" className="buttonTo">
                  Comprar
                </button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Cart;
