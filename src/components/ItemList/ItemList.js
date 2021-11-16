import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Libros from "./libros.json";
import "./itemList.css";
import { useParams } from "react-router";

const ItemList = () => {
  const [libros, setLibros] = useState([]);
  const { categoria } = useParams();

  const getLibros = (libros) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (libros) {
          resolve(libros);
        } else {
          reject("No se encontró información");
        }
      }, 500);
    });

  useEffect(() => {
    getLibros(Libros)
      .then((res) => {
        categoria
          ? setLibros(res.filter((books) => books.categoria === categoria))
          : setLibros(Libros);
      })
      .catch((err) => console.log(err));
  }, [categoria]);

  return (
    <>
      <div className="itemList">
        {libros.length
          ? libros.map((libro) => <Item key={libro.id} libros={libro} />)
          : "Cargando..."}
      </div>
    </>
  );
};

export default ItemList;
