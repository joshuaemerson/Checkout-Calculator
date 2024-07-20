import React from 'react';
import './CartItemDate.css'

const CartItemDate = (props) => {

  const month = props.date.toLocaleString("en-US", { month: "long" })
  const day = props.date.toLocaleString("en-US", { day: "2-digit" })
  const year = props.date.getFullYear()

  return (
    <div className='cartitem-date'>
      <div className='cartitem-date__month'>{month}</div>
      <div className='cartitem-date__year'>{year}</div>
      <div className='cartitem-date__day'>{day}</div>
    </div>
  );
}

export default CartItemDate;