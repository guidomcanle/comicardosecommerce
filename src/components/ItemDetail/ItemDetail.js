import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import BotonACarrito from "../BotonACarrito/BotonACarrito";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext/CartContext";

function ItemDetail({ libro }) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState();
  const { addItem, removeItem } = useCart();

  const onAdd = (quantity) => {
    setFlag(false);
    setCartInner(quantity);
    addItem({ book: libro, quantity: quantity, id: libro.id });
    console.log(quantity);
  };

  const onRemove = () => {
    removeItem({ book: libro, id: libro.id });
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
        <button onClick={onRemove}>borrar el producto agregado</button>
        {flag ? (
          <ItemCount
            initial={1}
            stock={9}
            id={libro.id}
            onAdd={onAdd}
          ></ItemCount>
        ) : (
          <BotonACarrito cart={cartInner} libro={libro} />
        )}
      </article>
    </>
  );
}

export default ItemDetail;
