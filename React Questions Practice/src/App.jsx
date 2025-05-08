// import { useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { useCartContext } from "./context/CartContext.jsx";

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
  const { setCount } = useCartContext();
  return (
    <div>
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <h2>Count is : {state.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset Count</button> */}
      <Navbar />
      <Cart />
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => (count < 1 ? 0 : count - 1))}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
