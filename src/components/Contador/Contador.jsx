import React from "react";
import { useState, useEffect } from "react";

const Contador = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState("black");

  useEffect(() => {
    console.log("Contador");
    if (contador > 5) {
      setColor("red");
    } else setColor("blue");
  }, [contador]);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    console.log(`Agregado ${contador} al carrito`);
  };

  return (
    <div className="card">
      <h2>Contador</h2>
      <div className="card-body">
        <button
          onClick={disminuirContador}
          type="button"
          className="btn btn-info"
        >
          -
        </button>
        <span>{contador}</span>
        <button
          onClick={aumentarContador}
          type="button"
          className="btn btn-info"
        >
          +
        </button>
        <div>
          <button
            onClick={agregarCarrito}
            type="button"
            className="btn btn-success"
            style={{ color: color }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
