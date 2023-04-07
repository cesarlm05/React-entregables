import React from "react";

const ItemDetail = ({id,name,description,price,img}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">
          <h2>Nombre: {name}</h2>
          <h3>Precio: {price}</h3>
          <h3>Item: {id}</h3>
          <p>{description}</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
