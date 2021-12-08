import "./CartItem.css";
import { useCart } from "../../contexts/CartContext/CartContext";

const CartItem = ({ books, quantity }) => {
  const { removeItem, addOneItem, removeOneItem } = useCart();

  const onRemove = () => {
    removeItem({ book: books, id: books.id });
  };
  const onAddOneItem = () => {
    if (quantity < books.stock) addOneItem({ book: books, id: books.id });
  };
  const onRemoveOneItem = () => {
    removeOneItem({ book: books, id: books.id });
  };

  return (
    <>
      <div className="cartItemDiv">
        <div className="cartItemDiv--box">
          <p className="cartItemDiv--text">{books.title}</p>
          <p className="cartItemDiv--text">{books.authors}</p>
          <img
            src={`${books.img}`}
            alt={books.title}
            className="cartItemImg"
          ></img>
          <div className="cartItemDiv--box">
            <p className="cartItemDiv--text">Stock: {books.stock}</p>
            <p className="cartItemDiv--text">Cantidad: {quantity}</p>
            <p className="cartItemDiv--text">${books.price}</p>
            <button
              onClick={onRemoveOneItem}
              className="cartItemDiv--text buttonTo"
            >
              -
            </button>
            <button
              onClick={onAddOneItem}
              className="cartItemDiv--text buttonTo"
            >
              +
            </button>
            <button onClick={onRemove} className="cartItemDiv--text buttonTo">
              borrar el producto
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
