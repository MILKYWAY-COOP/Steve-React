import React from 'react';
import boxes from './components/boxes'

export default function App() {
  const [boîte, setboîte] = React.useState(boxes); 

  const boîteElements = boîte.map((item) => {
    return <div key={item.id} className="box"></div>;
  });

  return (
    <main>
      {boîteElements}
    </main>
  );
}
