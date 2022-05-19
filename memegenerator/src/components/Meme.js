import React from 'react';

export default function MemeComponent() {
  return (
    <main>
      <div className='form'>
        <input type="text"className='form--input'placeholder='top text'/>
        <input type="text"className='form--input'placeholder='bottom text'/>
        <button className='form--button'>Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
