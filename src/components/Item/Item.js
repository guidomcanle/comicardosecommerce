import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./Item.css";

const Item = ({ libros }) => {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{libros.title}</p>
          <p className="itemInfo">{libros.authors}</p>
          <img src={libros.img} alt={libros.title}></img>
          <p className="itemInfo">${libros.price}</p>
        </div>

        <ItemDetailContainer />
        <ItemCount stock="9" initial="1" />
      </div>
    </>
  );
};

export default Item;
