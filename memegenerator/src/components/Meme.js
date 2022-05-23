import React from 'react';
import memeData from '../memeData';

export default function MemeComponent() {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="top text" />
        <input type="text" className="form--input" placeholder="bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={ memeImage} className ="meme--image" />
    </main>
  );
}
