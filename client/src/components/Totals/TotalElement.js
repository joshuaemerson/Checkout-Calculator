import React from "react";
import Card from "../UI/Card";
import "../CartItem/CartItem.css";

const TotalElemenet = (props) => {
  return (
    <li className="cartitems-list">
      <Card className="cartitem-item">
        <div className="cartitem-item__description">
          <h2>{props.name}</h2>
          <div className="cartitem-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default TotalElemenet;