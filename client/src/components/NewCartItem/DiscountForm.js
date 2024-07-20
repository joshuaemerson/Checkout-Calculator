import React, { useRef } from "react";
import "./CartItemForm.css";

const DiscountForm = (props) => {
  const discountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault();

    const discountData = {
      discount: discountInputRef.current.value,
    }

    props.onSaveDiscountData(discountData);
    discountInputRef.current.value = ''
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cartitem__controls">
        <div className="new-cartitem__control">
          <label>Discount Code:</label>
          <input
            type="text"
            ref={discountInputRef}
          />
        </div>
      </div>
      <div className="new-cartitem__actions">
        <button type="submit">Add Discount</button>
      </div>
    </form>
  );
};

export default DiscountForm;
