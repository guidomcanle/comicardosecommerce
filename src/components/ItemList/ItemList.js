import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./itemList.css";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "../Firebase/index";

const ItemList = () => {
  const [book, setBook] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q = query(collection(db, "items"));

    if (categoria === undefined) {
      getDocs(q).then((snapshot) => {
        setBook(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
    } else {
      q = query(collection(db, "items"), where("categoria", "==", categoria));
      getDocs(q).then((snapshot) => {
        setBook(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
    }
  }, [categoria]);

  return (
    <>
      <div className="itemList">
        {book.length
          ? book.map((book) => <Item key={book.id} book={book} />)
          : "Cargando..."}
      </div>
    </>
  );
};

export default ItemList;
