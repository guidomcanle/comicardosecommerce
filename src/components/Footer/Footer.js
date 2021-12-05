import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <h4 className="footer__legend">Todos los derechos reservados.</h4>
      <div className="footer__action">
        <p className="footer__action__text">
          Iconos diseñados por{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </p>
        <div className="footer__action--divIcons">
          <a
            href="https://www.instagram.com/comicardos/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt="Instagram de Comicardos"
              className="footer__action--divIcons"
            />
          </a>
          <a
            href="https://twitter.com/comicardos"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"
              alt="Twitter de Comicardos"
              className="footer__action--divIcons"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
