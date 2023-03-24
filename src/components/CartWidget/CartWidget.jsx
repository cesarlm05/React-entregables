import React from "react";
import "./CartWidget.css"

const CartWidget = () => {
  const cartImg = "https://cdn-icons-png.flaticon.com/512/263/263142.png";

  return (
    <div className="cart--widget">
      <img className="cart--img" src={cartImg} alt="" />
      <span className="cart--count">3</span>
    </div>
  );
};

export default CartWidget;
