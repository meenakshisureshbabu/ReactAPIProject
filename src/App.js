
import './App.css';
import FruitCard from './components/FruitComponents/FruitCard';
import fruitimages from './models/fruitimages'
import FruitDisplay from './components/FruitDisplay/FruitDisplay';
import { useState } from 'react';
import Header from './components/Header/Header';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/About';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/kyf' element={<FruitDisplay fruitimages={fruitimages}/>}/>
      </Routes>
       
        

    </div>
  );
}

export default App;
