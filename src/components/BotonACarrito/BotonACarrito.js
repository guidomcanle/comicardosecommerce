import "../BotonACarrito/BotonACarrito.css";
import { Link } from "react-router-dom";

const BotonACarrito = () => {
  return (
    <>
      <div className="itemCount">
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
