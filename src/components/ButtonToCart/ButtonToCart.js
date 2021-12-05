import "./ButtonToCart.css";
import { Link } from "react-router-dom";

const ButtonToCart = () => {
  return (
    <>
      <div className="itemCount">
        <div className="buttonFinishToDiv">
          <Link to={`/`}>
            <button className="buttonTo">Seguir comprando</button>
          </Link>
          <Link to={`/cart`}>
            <button className="buttonFinish">Terminar la compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ButtonToCart;
