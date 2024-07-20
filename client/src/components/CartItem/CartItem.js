import React from "react";
import CartItemDate from "./CartItemDate";
import Card from "../UI/Card";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li>
      <Card className="cartitem-item">
        <CartItemDate date={props.date} />
        <div className="cartitem-item__description">
          <h2>{props.title}</h2>
          <div className="cartitem-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default CartItem;
