import React from 'react';


export default function App() {
  const result = React.useState("Hello")
  return (
    <div className='state'>
      <h1 className='state--title'> Is state important to Know?</h1>
      <div className='state--value'>
        <h1>{ result[0]}</h1>
      </div>
    </div>
  )
}