import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      {/* <App /> */}
      <App2 />
    </CartContextProvider>
  </StrictMode>
);
