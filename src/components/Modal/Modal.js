import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container">
        <button onClick={closeModal}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
