import React, { useRef } from "react";
import "./CartItemForm.css";

const CartItemForm = (props) => {
  const titleInputRef = useRef()
  const amountInputRef = useRef("0")
  const dateInputRef = useRef()

  const today = new Date()

  const submitHandler = (event) => {
    event.preventDefault();

    const cartItemData = {
      title: titleInputRef.current.value,
      amount: +amountInputRef.current.value,
      date: new Date(dateInputRef.current.value + "T00:00"),
    }

    props.onSaveCartItemData(cartItemData);
    titleInputRef.current.value = ''
    amountInputRef.current.value = ''
    dateInputRef.current.value = ''
  };  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cartitem__controls">
        <div className="new-cartitem__control">
          <label>Title</label>
          <input
            type="text"
            ref={titleInputRef}
          />
        </div>
        <div className="new-cartitem__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            ref={amountInputRef || 0}
          />
        </div>
        <div className="new-cartitem__control">
          <label>Date</label>
          <input
            type="date"
            value={today.toISOString().substr(0, 10)}
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="new-cartitem__actions">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default CartItemForm;
