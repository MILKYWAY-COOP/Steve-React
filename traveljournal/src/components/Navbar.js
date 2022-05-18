import React from "react"
import img from './images/Africa.png'

export default function NavBar() {
    return (
        <nav>
            <img src={img} className='nav-logo' />
            <p className='nav-text'>My travel journal</p>
        </nav>
    )
}