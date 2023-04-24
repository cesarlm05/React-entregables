import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ id, name, description, price, img, stock }) => {
  const [addCount, setAddCount] = useState(0);
  const { addProduct } = useContext(CarritoContext);

  const itemCount = (count) => {
    setAddCount(count);
    console.log("ItemCount: " + count);
    const item = { id, name, price };
    addProduct(item, count);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">
          <h2>Nombre: {name}</h2>
          <h3>Precio: {price}</h3>
          <h3>Item: {id}</h3>
          <p>{description}</p>
        </p>
        {addCount > 0 ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount inicial={1} stock={stock} onAdd={itemCount} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
