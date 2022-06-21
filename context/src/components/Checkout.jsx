import { useContext } from 'react'
import React from 'react'
import CartContext from '../cartContext'

export default function Checkout() {
    const {items} = useContext(CartContext);
    return (
        <>
            <h1>Checkout</h1>
            <div className='shopping-bag'>
                {items.map((item) => (
                    <div>
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}