import React, { useContext } from 'react'
import '../FruitDisplay/fruitdisplay.css'
import FruitCard from '../FruitComponents/FruitCard'
import { useState } from 'react'
import Header from '../Header/Header'
import Popup from 'reactjs-popup';
import Footer from '../Footer/Footer'
import { FaSearch } from "react-icons/fa";
import Search from '../Search/Search'
import { DarkModeContext } from '../../context/DarkModeContext'

function FruitDisplay({fruitimages}) {


  const [fruitid,setFruitid] = useState(null)
  const {darkMode} = useContext(DarkModeContext);

  const [query,setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filtereddata = fruitimages.filter(fruitimage => fruitimage.name.toLowerCase().indexOf(query.toLowerCase())!== -1)

  if(query){
    fruitimages = filtereddata;
  }

  

  const dataAvailable = () => {
    return (
      <div className={darkMode ? `FruitDisplayDark` : `FruitDisplayLight`}>
      <Header/>
      <Search handleInputChange = {handleInputChange}/>
      <section className='fruitdisplaycard'>
      {
    fruitimages.map((fruit) => {
        return (
          <Popup onOpen={() => setFruitid(fruit.id)} trigger={
          <div className='fruit-display-div' key={fruit.id}>
            <h1>{fruit.name}</h1>
            <img className='fruit-image' src={fruit.path} alt={fruit.name}></img>
           </div>
          }
          position={['center center']}
          closeOnDocumentClick
          > 
          <FruitCard id={fruitid}/>       
        </Popup>

        )
    })
    
    }
    
    </section>
    <Footer/>
    </div>
    )
  }

  const nodatafound = () => {
    
    return (
      <>
      <Header/>
      <Search handleInputChange = {handleInputChange}/>
    <h3>No Fruits found</h3>
    <Footer/>
    </>
    )
  }

  console.log(fruitimages.length)
  return fruitimages.length > 0 ? dataAvailable() : nodatafound()
    
    
  
}

export default FruitDisplay