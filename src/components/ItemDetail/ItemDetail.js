function ItemDetail({ libro }) {
  return (
    <>
      <div className="itemDiv">
        <div className="itemData">
          <p className="itemInfo">{libro.title}</p>
          <p className="itemInfo">{libro.authors}</p>
          <p className="itemInfo">{libro.origin}</p>
          <img src={libro.img} alt={libro.title}></img>
          <p className="itemInfo">${libro.price}</p>
          <p className="itemInfo">${libro.info}</p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
