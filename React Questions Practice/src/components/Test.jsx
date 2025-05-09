import React from "react";
import { useCartContext } from "../context/CartContext";

// const Test = () => {
//   const { count } = useCartContext();
//   console.log("Test rendering again");
//   return (
//     <div>
//       <p>Inside test count is: {count}</p>
//       <h4>Test Component rendered</h4>
//     </div>
//   );
// };

// export default React.memo(Test);



// Another Method to use React.memo hook

const Test = React.memo(() => {
  const { count } = useCartContext();
  console.log("Test rendering again");
  return (
    <div>
      <p>Inside test count is: {count}</p>
      <h4>Test Component rendered</h4>
    </div>
  );
});

export default Test;
