import React from "react";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Header = () => {
  return (
    <header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:idCat" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Sitio en construcción</h1>} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default Header;

