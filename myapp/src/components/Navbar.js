import React from 'react';
import reactLogo from './images/logo.png';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'white' : ''}>
      <img className="nav--logo_icon" src={reactLogo} />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
