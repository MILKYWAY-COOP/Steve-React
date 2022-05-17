import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    return (
      <>
        <Navbar />
        <Card
          img="ngong.jpg"
          rating={5.0}
          viewCount={6}
          country="Kenya"
          title="Visit Ngong with Stephen Muchendu"
          price={100}
        />
      </>
    );
}
