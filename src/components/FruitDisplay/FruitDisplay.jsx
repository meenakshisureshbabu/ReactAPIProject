import React from 'react'
import '../FruitDisplay/fruitdisplay.css'

function FruitDisplay({fruitimages}) {
    console.log({fruitimages})
  return (
    <section className='fruitdisplaycard'>{
    fruitimages.map((fruit) => {
        return (
        <div className='fruit-display-div'>
        <h1>{fruit.name}</h1>
        <img className='fruit-image' src={fruit.path} alt={fruit.name}></img>
        </div>
        )
    })
    }
    </section>
  )
}

export default FruitDisplay