import React from "react";
import DiscountForm from "./DiscountForm";
import "./NewCartItem.css";

const DiscountItem = (props) => {

  const saveDiscountDataHandler = (enteredDiscount) => {
    props.getDiscount(enteredDiscount.discount)
  };

  return (
    <div className="new-cartitem">
        <DiscountForm
          onSaveDiscountData={saveDiscountDataHandler}
        />
    </div>
  );
};

export default DiscountItem;
