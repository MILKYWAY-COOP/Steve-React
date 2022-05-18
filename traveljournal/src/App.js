import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Data from './data';

export default function App() {
  const data = Data.map((item) => {
    return <Hero item={item} />;
  });
  return (
    <>
      <NavBar />
      <>{data}</>
    </>
  );
}
