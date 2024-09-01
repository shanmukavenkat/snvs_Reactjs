import React from 'react';
import './App.css';
import TheCard from './component/TheCard/indexx.js';  // Correct path to theCard.js

const theData = [
  {
    id: 1,
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    phone: "123-456-7890"
  },
  {
    id: 2,
    name: "Williams",
    email: "Williams@gmail.com",
    phone: "123-456-7890"
  },
  {
    id: 3,
    name: "Smith",
    email: "Smith@gmail.com",
    phone: "123-456-7890"
  },
  {
    id: 4,
    name: "Andrea",
    email: "Andrea@gmail.com",
    phone: "123-456-7890"
  }
  ,
  {
    id: 5,
    name: "Smith",
    email: "Smith@gmail.com",
    phone: "123-456-7890"
  },
  {
    id: 6,
    name: "Andrea",
    email: "Andrea@gmail.com",
    phone: "123-456-7890"
  }
]

const App = () => (
  <div className="text-center two">
    {
      theData.map(data => (
        <TheCard data={data} key={data.id} />
      ))
    }
  </div>
);

export default App;
