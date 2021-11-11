import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import BotonACarrito from "../BotonACarrito/BotonACarrito";
import { useState, useContext } from "react";
import { CartProvider } from "../../contexts/CartContext/CartContext";

function ItemDetail({ libro }) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState();

  const onAdd = (quantity) => {
    setFlag(false);
    setCartInner(quantity);

    console.log(quantity);
  };

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
        {flag ? (
          <ItemCount
            initial={1}
            stock={9}
            id={libro.id}
            onAdd={onAdd}
          ></ItemCount>
        ) : (
          <BotonACarrito cart={cartInner} />
        )}
      </article>
    </>
  );
}

export default ItemDetail;
