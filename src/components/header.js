import React from 'react';
import "../css/home.css";
import cart from "../Images/cart.jpg";

export default function header(props) {
  return (
    <div>
      <span>{props.data.length}</span>

      <img className="cart" src={cart} alt="Card image cap" />
    </div>
  );
}
