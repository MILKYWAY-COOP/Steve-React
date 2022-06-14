import React from 'react';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }

    getMemes()
  }, []);

  console.log(allMemeImages)

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function addText(event) {
    const { value, name } = event.target;
    setMemeImage((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={addText}
          name="topText"
          value={memeImage.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={addText}
          name="bottomText"
          value={memeImage.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}


