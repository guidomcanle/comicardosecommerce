import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);

    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setBook(snapshot.data());
      }
    });
  }, [id]);

  return (
    <>
      <div className="itemDetailContainer">
        {book ? <ItemDetail key={book.id} book={book} /> : "Cargando..."}
      </div>
    </>
  );
};

export default ItemDetailContainer;
