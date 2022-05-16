import React from 'react';
import Ngong from './images/ngong.jpg'
import Star from './images/star.svg'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className='card'>
            <img src={Ngong} alt="Ngong hills image" className='card--image' />
            <div className="card-stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>KEN</span>
            </div>
            <p>Visit Ngong with Stephen Muchendu</p>
            <p><span className='bold'>From $100</span></p>
      </div>
  );
}
