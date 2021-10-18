import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ product, stock, initial }) => {
  const [itemsInCart, setItemsInCart] = useState(parseInt(initial));

  const add = () => {
    if (itemsInCart < stock) setItemsInCart(itemsInCart + 1);
    else console.log("No hay más productos");
  };
  const remove = () => {
    if (itemsInCart > initial) setItemsInCart(itemsInCart - 1);
    else console.log("No pueden ser menos");
  };

  return (
    <div className="itemCount">
      <h3>{product}</h3>
      <div className="amountItems">
        <button className="addRemoveButton" onClick={add}>
          +
        </button>
        <p className="itemCounter">{itemsInCart}</p>
        <button className="addRemoveButton" onClick={remove}>
          -
        </button>
      </div>
      <button className="toCart">Agregar a carrito</button>
    </div>
  );
};

export default ItemCount;
