import { useState, useEffect } from "react";
import { getProducts, gerProductsCategories } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCat } = useParams();

  useEffect(() => {
    const functProduct = idCat ? gerProductsCategories : getProducts;

    functProduct(idCat)
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, [idCat]);

  return (
    <>
      <h2>Productos</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
