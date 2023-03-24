import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ListContainer = () => {
  return (
    <div>
      <h1>Listado</h1>
      <ul className="list-group">
        <ItemListContainer greeting="Hola, buen día" />
        <ItemListContainer greeting="Cambio" />
        <ItemListContainer greeting="Cadena" />
        <ItemListContainer greeting="Shifters" />
      </ul>
    </div>
  );
};

export default ListContainer;
