import React from "react";
import carrito from "../img/carrito-de-compras.png";
import "./CartWidget.css";
import { useCart } from "../../contexts/CartContext/CartContext";

const CartWidget = () => {
  const { cart } = useCart();

  console.log();

  return (
    <>
      <div className="divCartLogo">
        <img className="carritoLogo" src={carrito} alt="carrito"></img>
        <p>{cart.length}</p>
      </div>
    </>
  );
};
export default CartWidget;
