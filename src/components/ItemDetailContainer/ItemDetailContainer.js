import { useEffect, useState } from "react";

import Libros from "../ItemList/libros.json";

import ItemDetail from "../ItemDetail/ItemDetail";
import Modal from "../Modal/Modal";

const ItemDetailContainer = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch(Libros)
      .then((response) => response.json)
      .then((data) => {
        setLibros(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(libros);

  return (
    <>
      <button>Más información</button>
      <div className="itemList">
        {libros
          ? libros.map((libros) => {
              return <ItemDetail key={libros.id} libros={libros} />;
            })
          : "Cargando..."}
      </div>
    </>
  );
};

export default ItemDetailContainer;
