import "./CartItem.css";
import { useCart } from "../../contexts/CartContext/CartContext";

const Item = ({ books, quantity }) => {
  const { removeItem } = useCart();

  const onRemove = () => {
    removeItem({ book: books, id: books.id });
  };
  return (
    <>
      <div className="cartItemDiv">
        <div className="cartItemDiv--box">
          <p className="cartItemDiv--text">{books.title}</p>
          <p className="cartItemDiv--text">{books.authors}</p>
          <img src={`.../public/img/${books.img}`} alt={books.title}></img>
          <p className="cartItemDiv--text">${books.price}</p>
          <p className="cartItemDiv--text">{quantity}</p>
          <button onClick={onRemove}>borrar el producto agregado</button>
        </div>
      </div>
    </>
  );
};

export default Item;
