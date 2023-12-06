
import './App.css';
import FruitCard from './components/FruitComponents/FruitCard';
import fruitimages from './models/fruitimages'
import FruitDisplay from './components/FruitDisplay/FruitDisplay';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/About';
import DarkModeProvider from './context/DarkModeContext';


function App() {

  return (
    <div className="App">
      <DarkModeProvider>
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/kyf' element={<FruitDisplay fruitimages={fruitimages}/>}/>
      </Routes>
      </DarkModeProvider>
    </div>
  );
}

export default App;
