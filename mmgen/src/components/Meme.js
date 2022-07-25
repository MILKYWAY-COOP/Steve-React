import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [memeImage, setMemeImage] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomIndex].url;
    const Name = allMemeImages[randomIndex].name;
    setMemeImage((prevState) => ({
      ...prevState,
      randomImageUrl: url,
      randomImageName: Name
    }));
  }

  function addText(event) {
    const { value, name } = event.target;
    setMemeImage((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  return (
    <div>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          onChange={addText}
          className="form--input"
          value={memeImage.topText}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          onChange={addText}
          className="form--input"
          value={memeImage.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get Meme
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImageUrl} alt={memeImage.randomImageName} />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
        <h2>{memeImage.randomImageName}</h2>
      </div>
    </div>
  );
}
