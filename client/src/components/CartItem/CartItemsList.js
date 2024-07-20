import React from "react";
import CartItem from "./CartItem";
import "./CartItemsList.css";

const CartItemsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="cartitems-list__fallback">Found no Items.</h2>;
  }

  return (
    <div className="cartitems">
    <ul className="cartitems-list">
      {props.items.map((expense) => (
        <CartItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
    </div>
  )
}

export default CartItemsList;
