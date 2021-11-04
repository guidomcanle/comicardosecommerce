import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ libros }) => {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{libros.title}</p>
          <p className="itemInfo">{libros.authors}</p>
          <img src={`../ItemList/img/${libros.img}`} alt={libros.title}></img>
          <p className="itemInfo">${libros.price}</p>
        </div>
        <Link to={`/libros/${libros.id}`}>
          <button className="boton--detalles">Detalles</button>
        </Link>
        <ItemCount stock="9" initial="1" />
      </div>
    </>
  );
};

export default Item;
