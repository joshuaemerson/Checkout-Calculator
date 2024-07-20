import React from "react";
import TotalElement from "./TotalElement";

const Total = (props) => {
  return (
    <React.Fragment>
      <TotalElement name="SubTotal" amount={props.subTotal} />
      <TotalElement name="Discount" amount={props.discount} />
      <TotalElement name="Tax" amount={props.tax} />
      <TotalElement name="Total" amount={props.total} />
    </React.Fragment>
  );
};

export default Total;