import React, { useContext } from 'react';
import noteContext from './noteContext';

function Card() {
  const color=useContext(noteContext);
  return (
    <div>
      <h1 style={{color:color}}>This is a Card Component</h1>
    </div>
  )
}

export default Card
