import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, description, price, img, stock }) => {
  const [addCount, setAddCount] = useState(0);
  const { addProduct } = useContext(CartContext);

  const itemCount = (count) => {
    setAddCount(count);
    console.log("ItemCount: " + count);
    const item = { id, name, price };
    addProduct(item, count);
  };

  return (
    <div className="item--detail">
      <div className="card" style={{ width: "25rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-text">
            <h2>Nombre: {name}</h2>
            <h6>Item: {id}</h6>
            <p>{description}</p>
            <h3>Precio: {price}</h3>
            <h3>Stock: {stock}</h3>
          </p>
          {addCount > 0 ? (
            <Link to="/cart">Terminar compra</Link>
          ) : (
            <ItemCount inicial={1} stock={stock} onAdd={itemCount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
