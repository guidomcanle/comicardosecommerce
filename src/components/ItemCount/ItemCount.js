import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ product, stock, initial, onAdd, id }) => {
  const [itemsToCart, setItemsToCart] = useState(parseInt(initial));

  const add = () => {
    if (itemsToCart < stock) setItemsToCart(itemsToCart + 1);
    else console.log("No hay más productos");
  };
  const remove = () => {
    if (itemsToCart > initial) setItemsToCart(itemsToCart - 1);
    else console.log("No pueden ser menos");
  };

  const callBackToItemDetail = () => {
    onAdd(itemsToCart);
    console.log(itemsToCart);
  };

  return (
    <div className="itemCount">
      <h3>{product}</h3>
      <h4 className="stockText">Stock disponible: {stock}</h4>
      <div className="amountItems">
        <button className="addRemoveButton" onClick={add}>
          +
        </button>
        <p className="itemCounter">{itemsToCart}</p>
        <button className="addRemoveButton" onClick={remove}>
          -
        </button>
      </div>
      <button className="toCart" onClick={callBackToItemDetail}>
        Agregar a carrito
      </button>
    </div>
  );
};

export default ItemCount;
