import React from "react";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "../../context/CarritoContext";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:idCat" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Sitio en construcción</h1>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </header>
  );
};

export default Header;
