import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useApp() {
    return useContext(CartContext);
}

export function CartProvider({ children }) { 
    const [items, setItems] = useState([]);

    const addToCart = (name, price) => { 
        setItems([...items, { name, price }]);
    }
    
    return (
        <CartContext.Provider value={{ items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext