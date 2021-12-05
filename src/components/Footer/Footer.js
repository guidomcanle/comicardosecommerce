import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <h4 class="footer__leyenda">Todos los derechos reservados.</h4>
      <div class="footer__acciones">
        <p class="footer__acciones__text">
          Iconos diseñados por{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </p>
        <div class="footer_acciones-divIcons">
          <a
            href="https://www.instagram.com/comicardos/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt="Instagram de Comicardos"
              class="footer__acciones__divIcons--icons"
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
              class="footer__acciones__divIcons--icons"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
