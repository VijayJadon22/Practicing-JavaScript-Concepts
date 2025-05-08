import React from "react";
import { useCartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { count } = useCartContext();
  return (
    <div>
      <h2>Cart</h2>
      <p>Cart count is : {count}</p>
    </div>
  );
};

export default Cart;
