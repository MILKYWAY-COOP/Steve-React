import React from "react";
import Ngong from "./images/ngong.jpg"
import Icon from "./images/icon.png"

export default function Hero(props) {
    return (
      <div className="card--body">
        <div className="card">
          <img src="{Ngong}" className="card--img" />
          <div className="card--info">
            <div className="card--location">
              <img src={Icon} className="icon" />
              <h6  className='location--country'>Kenya</h6>
              <a href="https://goo.gl/maps/LTeMLtbZzX2CLwu66" className='location--map'>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}