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
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default Header;


//import Home from "../Home/Home";
//import Mountain from "../Mountain/Mountain";
//import Gravel from "../Gravel/Gravel";
//import Road from "../Road/Road";
//<Route path="/mountain" element={<Mountain />} />
//<Route path="/gravel" element={<Gravel />} />
//<Route path="/road" element={<Road />} />