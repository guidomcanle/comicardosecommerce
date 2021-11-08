import React, { useState } from "react";
import "./ItemCount.css";
import BotonACarrito from "../BotonACarrito/BotonACarrito";

const ItemCount = ({ product, stock, initial }) => {
  const [itemsInCart, setItemsInCart] = useState(parseInt(initial));
  const [flag, setFlag] = useState();

  const add = () => {
    if (itemsInCart < stock) setItemsInCart(itemsInCart + 1);
    else console.log("No hay más productos");
  };
  const remove = () => {
    if (itemsInCart > initial) setItemsInCart(itemsInCart - 1);
    else console.log("No pueden ser menos");
  };

  const buttonToCart = () => {
    setFlag(true);
  };

  return (
    <div className="itemCount">
      <h3>{product}</h3>
      <h4 className="stockText">Stock disponible: {stock}</h4>
      <div className="amountItems">
        <button className="addRemoveButton" onClick={add}>
          +
        </button>
        <p className="itemCounter">{itemsInCart}</p>
        <button className="addRemoveButton" onClick={remove}>
          -
        </button>
      </div>
      <button className="toCart" onClick={buttonToCart}>
        Agregar a carrito
      </button>
      {flag && <BotonACarrito />}
    </div>
  );
};

export default ItemCount;
