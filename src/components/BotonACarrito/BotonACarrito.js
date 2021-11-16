import "../BotonACarrito/BotonACarrito.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/CartContext";

const BotonACarrito = () => {
  const { clear } = useCart();

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
          <button onClick={clear}>borrar todo</button>
        </div>
      </div>
    </>
  );
};

export default BotonACarrito;
