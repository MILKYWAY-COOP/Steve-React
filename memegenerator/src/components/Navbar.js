import React from 'react';
import Troll from './images/trollface.svg'


export default function NavBar() {
    return (
        <nav>
            <div className='logo'>
                <img src={Troll}/>
                <h4>Meme Generator</h4>
            </div>
            <div className='nav--msg'>
                <h6>React Course - Project 3</h6>
            </div>
        </nav>
    )
}