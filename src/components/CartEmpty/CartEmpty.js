import { Link } from "react-router-dom";
import "./CartEmpty.css";

function CartEmpty() {
  return (
    <>
      <div className="cartEmptyDiv">
        <div className="cartEmptyBox">
          <h3>No hay productos aquí</h3>
          <Link to={`/`}>
            <button className="buttonTo">A buscar productos</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartEmpty;
