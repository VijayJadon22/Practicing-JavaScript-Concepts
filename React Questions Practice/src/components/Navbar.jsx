import React from "react";
import { useCartContext } from "../context/CartContext.jsx";



const Navbar = () => {
  const { count } = useCartContext();
  return (
    <div>
      <h2>Navbar</h2>
      <p>Count is: {count}</p>
    </div>
  );
};

export default Navbar;
