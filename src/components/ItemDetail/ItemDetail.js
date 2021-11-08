import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import BotonACarrito from "../BotonACarrito/BotonACarrito";
import { useState } from "react";

function ItemDetail({ libro }) {
  const [flag, setFlag] = useState(true);
  const [cart, setCart] = useState(null);

  const onAdd = (itemsToCart) => {
    setFlag(false);
    setCart(itemsToCart);

    console.log(itemsToCart);
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
          <BotonACarrito cart={cart} />
        )}
      </article>
    </>
  );
}

export default ItemDetail;
