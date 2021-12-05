import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ book }) => {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{book.title}</p>
          <p className="itemInfo">{book.authors}</p>
          <img src={`${book.img}`} alt={book.title} className="itemImg"></img>
          <p className="itemInfo">${book.price}</p>
        </div>
        <Link to={`/libros/${book.id}`}>
          <button className="button--details">Detalles</button>
        </Link>
      </div>
    </>
  );
};

export default Item;
