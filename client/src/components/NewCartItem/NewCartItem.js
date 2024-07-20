import React from "react";
import CartItemForm from "./CartItemForm";
import "./NewCartItem.css";

const NewCartItem = (props) => {

  const saveCartItemDataHandler = (enteredCartItemData) => {
    const cartItemData = {
      ...enteredCartItemData,
      id: Math.random().toString(),
    };
    props.onAddCartItem(cartItemData)
    
  };

  return (
    <div className="new-cartitem">
        <CartItemForm
          onSaveCartItemData={saveCartItemDataHandler}
        />
    </div>
  );
};

export default NewCartItem;
