import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext(null);

export const useCartContext =()=> useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <CartContext.Provider value={{count,setCount}}>
            {children}
        </CartContext.Provider>
    )
}