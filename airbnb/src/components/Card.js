import React from 'react';
import Star from './images/star.svg';

export default function Card(props) {
  console.log(props.item);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.item.location === 'Online') {
    badgeText = 'Online';
  }

  console.log(props.openSpots);
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card--image" />
      <div className="card-stats">
        <img src={Star} className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span>
      </p>
    </div>
  );
}
