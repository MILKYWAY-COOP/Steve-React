import React from 'react';
import reactLogo from './images/logo.png';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark':''}>
      <img className='nav--logo_icon' src={ reactLogo}/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}