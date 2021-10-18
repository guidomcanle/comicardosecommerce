import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <>
      <div className="list">
        <h2>{props.greeting}</h2>
        <ItemCount product="libro1" stock="9" initial="1" />
      </div>
    </>
  );
};
export default ItemListContainer;
