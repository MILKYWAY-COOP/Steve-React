import React, {useState, useEffect} from 'react';

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
}