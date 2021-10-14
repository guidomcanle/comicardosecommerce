import React from "react";
import carrito from "./img/carrito-de-compras.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <img className="carritoLogo" src={carrito} alt="carrito"></img>
    </>
  );
};
export default CartWidget;
