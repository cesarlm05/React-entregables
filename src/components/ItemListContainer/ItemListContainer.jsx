import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCat } = useParams();

  useEffect(() => {
    const myProducts = idCat ? query(collection(db, "products"), where("cat","==",idCat)): collection(db, "products");

    getDocs(myProducts)
    .then(res=>{
      const productsCategories = res.docs.map(doc => {
        const data = doc.data();
        return{id:doc.id, ...data}
      })
      setProducts(productsCategories);
    })
    .catch(err => console.error(err));

  }, [idCat]);

  return (
    <>
      <h2>Productos</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
