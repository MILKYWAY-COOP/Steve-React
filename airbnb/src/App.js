import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

export default function App() {
  const data = Data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        //{...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // viewCount={item.stats.reviewCount}
        // location={item.location}
        // price={item.price}
        // title={item.title}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{data}</section>
    </>
  );
}
