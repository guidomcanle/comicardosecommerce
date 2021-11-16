import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ product, stock, initial, onAdd, id }) => {
  const [quantity, setQuantity] = useState(parseInt(initial));

  const add = () => {
    if (quantity < stock) setQuantity(quantity + 1);
    else console.log("No hay más productos");
  };
  const remove = () => {
    if (quantity > initial) setQuantity(quantity - 1);
    else console.log("No pueden ser menos");
  };

  const callBackToItemDetail = () => {
    onAdd(quantity);
  };

  return (
    <div className="itemCount">
      <h3>{product}</h3>
      <h4 className="stockText">Stock disponible: {stock}</h4>
      <div className="amountItems">
        <button className="addRemoveButton" onClick={add}>
          +
        </button>
        <p className="itemCounter">{quantity}</p>
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
