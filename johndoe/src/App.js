import React from 'react'
import starFilled from './components/images/star-filled.png';
import starEmpty from './components/images/star-empty.png';
import h from './components/images/h.jpg';

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    console.log('Toggle Favorite');
  }

  return (
    <main>
      <article className="card">
        <img src={h} className="card--image" />
        <div className="card--info">
          <img
            src={`${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
