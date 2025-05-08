import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    case "RESET": {
      return { count: 0 };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <h2>Count is : {state.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset Count</button>
    </div>
  );
}

export default App;
