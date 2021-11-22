import "./Cart.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
/*import { getFirestore } from "../Firebase/index";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";*/
import { useState } from "react/cjs/react.development";

function Cart() {
  const { cart, clear } = useCart();
  const [userInfo, setUserinfo] = useState({
    name: "",
    surname: "",
    mail: "",
    tel: "",
    address: "",
  });

  const total = cart.reduce(
    (counter, x) => counter + x.price * cart.counter,
    0
  );

  const handleInputChange = (event) => {
    setUserinfo({
      ...userInfo,
      [event.target.name]: event.target.value,
      [event.target.surname]: event.target.value,
      [event.target.mail]: event.target.value,
      [event.target.tel]: event.target.value,
      [event.target.address]: event.target.value,
    });
  };

  const saveUserInfo = (event) => {
    event.preventeDefault();
    console.log(userInfo);
  };
  /*const sendOrder = {
    const newOrder = {
      buyer: userInfo,
      item: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: price(),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");
    
    updateDoc()
    addDoc(ordersCollection, newOrder)

  }

  const resetCart = () => {
    setCart([])
  }*/
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
            <form action="" method="post" onSubmit={saveUserInfo}>
              <label for="POST-name">Nombre:</label>
              <input
                id="POST-name"
                type="text"
                name="name"
                onChange={handleInputChange}
              ></input>
              <label for="POST-surname">Apellido:</label>
              <input
                id="POST-surname"
                type="text"
                name="surname"
                onChange={handleInputChange}
              ></input>
              <label for="POST-mail">Mail:</label>
              <input
                id="POST-mail"
                type="email"
                name="mail"
                onChange={handleInputChange}
              ></input>
              <label for="POST-tel">Teléfono</label>
              <input
                id="POST-tel"
                type="tel"
                name="tel"
                onChange={handleInputChange}
              ></input>
              <label for="POST-address">Dirección del envío:</label>
              <input
                id="POST-address"
                type="text"
                name="address"
                onChange={handleInputChange}
              ></input>

              <input type="submit" value="Enviar infor"></input>
            </form>
            <button>finalizar compra</button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
