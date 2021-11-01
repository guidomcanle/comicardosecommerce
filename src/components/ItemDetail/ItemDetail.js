import React from "react";

function ItemDetail({ libros }) {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{libros.title}</p>
          <p className="itemInfo">{libros.authors}</p>
          <p className="itemInfo">{libros.origin}</p>
          <img src={libros.img} alt={libros.title}></img>
          <p className="itemInfo">${libros.price}</p>
          <p className="itemInfo">${libros.info}</p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
