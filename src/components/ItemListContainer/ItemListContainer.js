import React from "react";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <>
      <div className="list">
        <h2>{props.greeting}</h2>
        <ItemList />
      </div>
    </>
  );
};
export default ItemListContainer;
