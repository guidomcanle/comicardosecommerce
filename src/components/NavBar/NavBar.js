import React from "react";
import "./NavBar.css";
import logo from "../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar--containerLogo">
          <Link to="/">
            <img src={logo} className="logo" alt="logotipo de la marca" />
          </Link>
        </div>
        <div className="navBar--containerList">
          <ul className="containerList--list">
            <li className="list--item">
              <Link to="/catalogo/" className="link">
                Tienda
              </Link>
            </li>
            <li className="list--item">
              <Link to="/sobrenosotros/" className="link">
                Sobre Nosotros
              </Link>
            </li>
            <li className="list--item">
              <Link to="/contacto/" className="link">
                Contacto
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
