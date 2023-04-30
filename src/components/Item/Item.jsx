import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card col-12 mb-2 col-md-4" style={{ width: "15rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Precio ${price}</li>
      </ul>
      <div className="card-body">
        <Link to={`/item/${id}`} className="card-link">
          Ver producuto
        </Link>
      </div>
    </div>
  );
};

export default Item;
