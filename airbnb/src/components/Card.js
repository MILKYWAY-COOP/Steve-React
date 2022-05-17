import React from 'react';
import Star from './images/star.svg'


export default function Card(props) {
    return (
      <div className="card">
        <img src={`../images/${props.img}`} alt="Ngong hills image" className="card--image" />
        <div className="card-stats">
          <img src={Star} className="card--star" />
          <span>{ props.rating}</span>
          <span className="gray">({props.viewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{ props.title}</p>
        <p>
          <span className="bold">From ${ props.price}</span>
        </p>
      </div>
    );
}