import { getProduct } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <div>
      {" "}
      <ItemDetail {...product} />{" "}
    </div>
  );
};

export default ItemDetailContainer;
