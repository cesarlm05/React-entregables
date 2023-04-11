import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, img }) => {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {
          //<p className="card-text">
          //{description}
          //</p>
        }
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Precio ${price}</li>
        <li className="list-group-item">ID: {id}</li>
      </ul>
      <div className="card-body">
        <Link to={"/"} className="card-link">
          Ver producuto
        </Link>
      </div>
    </div>
  );
};

export default Item;
