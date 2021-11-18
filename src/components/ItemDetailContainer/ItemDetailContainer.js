import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*import Data from "../ItemList/libros.json";*/
import { getFirestore } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState([]);

  /*const getLibros = (data, id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          const libroBuscado = data.find((libro) => libro.id === id);
          resolve(libroBuscado);
        } else {
          reject("No se encontró información");
        }
      }, 100);
    });

  useEffect(() => {
    getLibros(Data, Number(id))
      .then((res) => setLibro(res))
      .catch((err) => console.log(err));
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);

    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setLibro(snapshot.data());
      }
    });
  }, [id]);

  console.log(libro);

  return (
    <>
      <div className="itemDetailContainer">
        {libro ? <ItemDetail key={libro.id} libro={libro} /> : "Cargando..."}
      </div>
    </>
  );
};

export default ItemDetailContainer;
