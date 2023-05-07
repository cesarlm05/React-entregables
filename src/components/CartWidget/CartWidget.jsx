import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart: carrito } = useContext(CartContext);
  const cartImg = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
  const totalCart = carrito.reduce((total, product) => total + product.cantidad, 0);
  return (
    <div className="cart--widget">
      <Link to="/cart">
        <img className="cart--img" src={cartImg} alt="" />
        <span className="cart--count">{totalCart}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
