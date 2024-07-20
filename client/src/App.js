import React, { useState } from "react";
import NewCartItem from "./components/NewCartItem/NewCartItem";
import CartItemsList from "./components/CartItem/CartItemsList";
import DiscountItem from "./components/NewCartItem/DiscountItem";
import Total from "./components/Totals/Total";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState("0");
  const [total, setTotal] = useState("0");
  const [discountPercent, setDiscountPercent] = useState("0");
  const [discountAmount, setDiscountAmount] = useState("0");
  const [tax, setTax] = useState("0");

  async function getDiscount(discount) {
    if (discount) {
      const disc = await fetch("/discount/" + discount);
      const data = await disc.json();
      setDiscountPercent(data.discount);
    }
  }

  async function addCartItemHandler(cartItem) {
    if (cartItem.title === "") {
      setCartItems((prevCartItems) => {
        return [...prevCartItems];
      });
    } else {
      const response = await fetch("/invoice", {
        method: "POST",
        body: JSON.stringify({
          expenses: [cartItem, ...cartItems],
          discount: discountPercent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dataTwo = await response.json();

      setCartItems((prevCartItems) => {
        return [cartItem, ...prevCartItems];
      });

      console.log(cartItem.title);

      setSubTotal(dataTwo.subTotal);
      setDiscountAmount(dataTwo.discountAmount);
      console.log(discountAmount);
      setTax(dataTwo.tax);
      setTotal(dataTwo.total);
    }
  }

  return (
    <div>
      <NewCartItem onAddCartItem={addCartItemHandler} />
      <DiscountItem getDiscount={getDiscount} />
      <CartItemsList
        items={cartItems.filter(
          (item) => item.title !== "" && item.amount !== 0
        )}
      />
      <Total
        discount={parseFloat(discountAmount).toFixed(2)}
        subTotal={parseFloat(subTotal).toFixed(2)}
        tax={parseFloat(tax).toFixed(2)}
        total={parseFloat(total).toFixed(2)}
      />
    </div>
  );
};

export default App;
