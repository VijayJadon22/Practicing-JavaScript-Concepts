// import { useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { useCartContext } from "./context/CartContext.jsx";
import Test from "./components/Test.jsx";
import { useCallback, useMemo, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       return { count: state.count + 1 };
//     }
//     case "DECREMENT": {
//       return { count: state.count - 1 };
//     }
//     case "RESET": {
//       return { count: 0 };
//     }
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count, setCount } = useCartContext();

  const [counter, setCounter] = useState(2);

  // const value = useMemo(() => {
  //   console.log("Calculated Power of counter");
  //   return Math.pow(counter, 3);
  // }, [counter]);

  const [trigger, setTrigger] = useState(null);

  const setCountValue = useCallback(() => {
    setCount((count) => count + 2);
  }, [trigger]);
  return (
    <div>
      {/* {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <h2>Count is : {state.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset Count</button> */}

      {/* Part 2 */}
      {/* <Navbar />
      <Cart />
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => (count < 1 ? 0 : count - 1))}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <Test setCountValue={setCountValue} />
      {/* <p>Value is: {value}</p> */}
      <button onClick={() => setCounter((counter) => counter + 2)}>
        Change value of counter
      </button>
      <button onClick={() => setTrigger(2)}>Trigger</button>
    </div>

    // Part 3
    // <div>

    // </div>
  );
}

export default App;
