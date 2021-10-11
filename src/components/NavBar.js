import React from "react";
import "./NavBar.css";
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar--containerLogo">
          <a href="index.html">
            <img src={logo} className="logo" />
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
        </div>
      </nav>
    </>
  );
};
export default Navbar;