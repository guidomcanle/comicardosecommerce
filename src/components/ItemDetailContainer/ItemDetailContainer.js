import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Libros from "../ItemList/libros.json";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams;
  const [libro, setLibros] = useState([]);

  const getLibros = (libros, id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (libros) {
          const libro = libros.find((libro) => libro.id === id);
          console.log(libro);
          resolve(libro);
        } else {
          reject("No se encontró información");
        }
      }, 200);
    });

  useEffect(() => {
    getLibros(Libros, Number(id))
      .then((res) => setLibros(res))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(libro);

  return (
    <>{libro ? <ItemDetail key={libro.id} libro={libro} /> : "Cargando..."}</>
  );
};

export default ItemDetailContainer;
