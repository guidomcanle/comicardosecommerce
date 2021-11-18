import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*import Data from "../ItemList/libros.json";*/
import { getFirestore } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);

    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setLibro(snapshot.data());
      }
    });
  }, [id]);

  return (
    <>
      <div className="itemDetailContainer">
        {libro ? <ItemDetail key={libro.id} libro={libro} /> : "Cargando..."}
      </div>
    </>
  );
};

export default ItemDetailContainer;
