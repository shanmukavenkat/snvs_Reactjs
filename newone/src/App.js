import React from 'react';
import './App.css';
import TheData from './component/theData/TheData.js'; // Ensure this path is correct

const newData = [
  {
    id: 1,
    name: 'Amudalapalli s.n.v.s.komal',
    profession: 'Student of computer science and engineering',
    location: 'Andhra Pradesh'
  },
  {
    id: 2,
    name: 'Srikanth',
    profession: 'Student of computer science and engineering',
    location: 'Andhra Pradesh'
  },
  {
    id: 3,
    name: 'Srikanth',
    profession: 'Student of computer science and engineering',
    location: 'Andhra Pradesh'
  }
]

const App = () => {
  return (
    <div>
      <marquee  className='card'>
        <span>
          <h1>ReactJS</h1>
          <p>React is a JavaScript library for building user interfaces.</p>
        </span>

      </marquee>
      {
        newData.map((data) => (
          <TheData key={data.id} newData={data} />
        ))
      }
    </div>
  );
}

export default App;
