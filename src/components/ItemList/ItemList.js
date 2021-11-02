import { useEffect, useState } from "react";

import Item from "../Item/Item";
import Libros from "./libros.json";
import "./itemList.css";

const ItemList = () => {
  const [libros, setLibros] = useState([]);

  const getLibros = (libros) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (libros) {
          resolve(libros);
        } else {
          reject("No se encontró información");
        }
      }, 3000);
    });

  useEffect(() => {
    getLibros(Libros)
      .then((res) => setLibros(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="itemList">
        {libros.map((Libros) => (
          <Item key={Libros.id} libros={Libros} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
