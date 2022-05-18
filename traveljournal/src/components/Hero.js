import React from 'react';
import Icon from './images/icon.png';

export default function Hero(props) {
  return (
    <div className="card--body">
      <div className="card">
        <img src={`../images/${props.item.imageUrl}`} className="card--img" />
        <div className="card--info">
          <div className="card--location">
            <img src={Icon} className="icon" />
            <h6 className="location--country">{props.item.location}</h6>
            <a
              href={props.item.googleMapsUrl}
              target="_blank"
              className="location--map"
            >
              View on Google Maps
            </a>
          </div>
          <h4 className="card--place">{props.item.title}</h4>
          <h5 className="card--date">
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <p className="card--description">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
