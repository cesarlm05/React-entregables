import { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div>
        <button type="button" className="btn btn-success" onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button type="button" className="btn btn-success" onClick={incrementar}> + </button>
      </div>
      <button type="button" className="btn btn-info" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
    </>
  );
};

export default ItemCount;
