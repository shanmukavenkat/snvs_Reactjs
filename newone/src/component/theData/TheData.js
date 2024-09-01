import React from 'react';
import './index.css';

const TheData = (props) => {
  const { name, profession, location } = props.newData;

  return (
    <div>
      <h1 className='one'>{name}</h1>
      <p className='one'>{profession}</p>
      <p className='one'>{location}</p>
      <button className='one'>Click me</button>
    </div>
  )
}

export default TheData;
