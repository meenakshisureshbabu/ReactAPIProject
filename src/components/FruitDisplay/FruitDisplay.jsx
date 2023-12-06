import React from 'react'
import '../FruitDisplay/fruitdisplay.css'
import FruitCard from '../FruitComponents/FruitCard'
import { useState } from 'react'
import Header from '../Header/Header'
import Popup from 'reactjs-popup';
import Footer from '../Footer/Footer'
import { FaSearch } from "react-icons/fa";

function FruitDisplay({fruitimages}) {


  const [fruitid,setFruitid] = useState(null)

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
      <>
      <Header/>
    <div className='search-div'>
        <div><label className='searchlabel'>Search</label></div>
        <div><input type="text" className='searchtext' onChange={handleInputChange}></input></div>
        <div>
        <FaSearch style={{width:"20px",height:"20px"}}/>
        </div>
      </div>
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
          position={['right center']}
          closeOnDocumentClick
          > 
          <FruitCard id={fruitid}/>       
        </Popup>

        )
    })
    
    }
     {/* {openModal && <FruitCard id={fruitid} closeModal={setOpenModal}/>} */}
    </section>
    <Footer/>
    </>
    )
  }

  const nodatafound = () => {
    
    return (
      <>
      <Header/>
    <div className='search-div'>
        <div><label className='searchlabel'>Search</label></div>
        <div><input type="text" className='searchtext' onChange={handleInputChange}></input></div>
        <div>
        <FaSearch style={{width:"20px",height:"20px"}}/>
        </div>
      </div>
    <h3>No Fruits found</h3>
    <Footer/>
    </>
    )
  }

  console.log(fruitimages.length)
  return fruitimages.length > 0 ? dataAvailable() : nodatafound()
    
    
  
}

export default FruitDisplay