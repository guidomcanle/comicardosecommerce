import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ libros }) => {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{libros.title}</p>
          <p className="itemInfo">{libros.authors}</p>
          <img src={`.../public/img/${libros.img}`} alt={libros.title}></img>
          <p className="itemInfo">${libros.price}</p>
        </div>
        <Link to={`/libros/${libros.id}`}>
          <button className="boton--detalles">Detalles</button>
        </Link>
      </div>
    </>
  );
};

export default Item;
