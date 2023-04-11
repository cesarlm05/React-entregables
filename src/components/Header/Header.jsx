import React from "react";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Mountain from "../Mountain/Mountain";
import Gravel from "../Gravel/Gravel";
import Road from "../Road/Road";

const Header = () => {
  return (
    <header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/gravel" element={<Gravel />} />
          <Route path="/road" element={<Road />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default Header;
