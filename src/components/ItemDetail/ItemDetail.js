import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ libro }) {
  return (
    <>
      <article className="itemArticle--estilos">
        <div className="itemData">
          <p className="itemInfo">{libro.title}</p>
          <p className="itemInfo">{libro.authors}</p>
          <p className="itemInfo">{libro.origin}</p>
          <img src={libro.img} alt={libro.title}></img>
          <p className="itemInfo">${libro.price}</p>
          <p className="itemInfo--text">{libro.info}</p>
        </div>
        <ItemCount />
      </article>
    </>
  );
}

export default ItemDetail;
