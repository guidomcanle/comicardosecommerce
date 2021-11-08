import "../BotonACarrito/BotonACarrito.css";
import { Link } from "react-router-dom";

const BotonACarrito = ({ cart }) => {
  return (
    <>
      <div className="itemCount">
        <h3>Agregó {cart} libros en el carrito</h3>
        <div className="botonTerminarSeguirDiv">
          <Link to={`/`}>
            <button className="botonSeguir">Seguir comprando</button>
          </Link>
          <Link to={`/cart`}>
            <button className="botonTerminar">Terminar la compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BotonACarrito;
