import React from "react";
import "./NavBar.css";
import logo from "../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar--containerLogo">
          <a href="index.html">
            <img src={logo} className="logo" alt="logotipo de la marca" />
          </a>
        </div>
        <div className="navBar--containerList">
          <ul className="containerList--list">
            <li className="list--item">
              <a href="catálogo/" className="link">
                Tienda
              </a>
            </li>
            <li className="list--item">
              <a href="sobrenosotros/" className="link">
                Sobre Nosotros
              </a>
            </li>
            <li className="list--item">
              <a href="contacto/" className="link">
                Contacto
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
