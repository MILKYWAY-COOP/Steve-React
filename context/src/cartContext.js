import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useApp() {
    return useContext(CartContext);
}

export function CartProvider({children}) { 
    return (
        <CartContext.Provider value={{ item: 1 }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext