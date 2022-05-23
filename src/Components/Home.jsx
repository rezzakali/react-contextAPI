import React, { useContext } from 'react';
import noteContext from './noteContext';

function Home() {
    const color=useContext(noteContext);
  return (
    <div>
      <h1 style={{color:color}}>This is a Home page</h1>
    </div>
  )
}

export default Home
