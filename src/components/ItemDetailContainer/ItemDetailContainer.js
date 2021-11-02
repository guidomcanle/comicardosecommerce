import { useEffect, useState } from "react";

import Libros from "../ItemList/libros.json";

import ItemDetail from "../ItemDetail/ItemDetail";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

const ItemDetailContainer = () => {
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

  console.log(libros);

  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <>
      <button onClick={openModal}>Más información</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="itemList">
          {libros
            ? libros.map((libro) => {
                return <ItemDetail key={libro.id} libro={libro} />;
              })
            : "Cargando..."}
        </div>
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
