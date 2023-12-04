import logo from './logo.svg';
import './App.css';
import FruitCard from './components/FruitComponents/FruitCard';
import fruitimages from './models/fruitimages'
import FruitDisplay from './components/FruitDisplay/FruitDisplay';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header/>
       <FruitDisplay fruitimages={fruitimages}/>
        

    </div>
  );
}

export default App;
