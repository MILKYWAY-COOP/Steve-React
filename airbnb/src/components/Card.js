import React from 'react';
import Star from './images/star.svg'


export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "Sold Out"
  } else if (props.location === "Online") {
    badgeText = "Online"
  }

  console.log(props.openSpots)
    return (
      <div className="card">
        {badgeText && <div className='card--badge'>{ badgeText}</div>}
        <img src={`../images/${props.img}`} className="card--image" />
        <div className="card-stats">
          <img src={Star} className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">({props.viewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span>
        </p>
      </div>
    );
}