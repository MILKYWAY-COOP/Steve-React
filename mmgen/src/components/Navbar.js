import React from 'react';
import Troll from './images/trollface.jpg';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={Troll} alt="trollface" />
                <h4>Meme Generator</h4>
            </div>
            <div className='nav--msg'>
                <h6>React Recap</h6>
            </div>
        </nav>
    )