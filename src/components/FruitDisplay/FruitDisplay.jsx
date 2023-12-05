import React from 'react'
import '../FruitDisplay/fruitdisplay.css'
import FruitCard from '../FruitComponents/FruitCard'
import { useState } from 'react'
import Header from '../Header/Header'
import Popup from 'reactjs-popup';


function FruitDisplay({fruitimages}) {


  const [fruitid,setFruitid] = useState(null)

  

  return (
    <>
    <Header/>
    <section className='fruitdisplaycard'>
      {
    fruitimages.map((fruit) => {
        return (
          <Popup onOpen={() => setFruitid(fruit.id)} trigger={
          <div className='fruit-display-div' key={fruit.id}>
          <img className='pickme blink' src="https://png.pngtree.com/png-clipart/20220124/original/pngtree-pick-me-up-png-image_7177909.png"/>
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
    </>
  )
}

export default FruitDisplay