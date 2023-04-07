import { getProduct } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProduct(3)
    .then((res) => setProduct(res));
  }, []);

  return <div> <ItemDetail {...product}/> </div>;
};

export default ItemDetailContainer;
