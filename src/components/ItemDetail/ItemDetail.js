import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ButtonToCart from "../ButtonToCart/ButtonToCart";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext/CartContext";

function ItemDetail({ book }) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState();
  const { addItem } = useCart();

  const onAdd = (quantity) => {
    setFlag(false);
    setCartInner(quantity);
    addItem({ book: book, counter: quantity, id: book.id });
  };

  return (
    <>
      <article className="itemArticle--styles">
        <div className="itemData">
          <p className="itemInfo">{book.title}</p>
          <p className="itemInfo">{book.authors}</p>
          <p className="itemInfo">{book.origin}</p>
          <img src={book.img} alt={book.title} className="itemImg"></img>
          <p className="itemInfo">${book.price}</p>
          <p className="itemInfo--text">{book.info}</p>
        </div>
        {flag ? (
          <ItemCount
            initial={1}
            stock={book.stock}
            id={book.id}
            onAdd={onAdd}
          ></ItemCount>
        ) : (
          <ButtonToCart cart={cartInner} book={book} />
        )}
      </article>
    </>
  );
}

export default ItemDetail;
