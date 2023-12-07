import React, { useContext } from 'react'
import './aboutimportantsection.css'
import Carousel from '../Carousel/Carousel'
import { DarkModeContext } from '../../context/DarkModeContext'

function AboutImportantsection() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className= {darkMode ? `aboutimportantsection-div-dark` : `aboutimportantsection-div`}>
        <div className= {darkMode ? `aboutimp-header-div-dark` : `aboutimp-header-div`}>
            <h1>Why is it important to eat fruit?</h1>
            <p>Eating fruit has many health benefits. People who eat fruits and vegetables as part of an overall diet may lower their risk for certain diseases. Fruits provide nutrients needed to maintain your health and body.</p>
            <div className='carousel'>
                <Carousel/>
            </div>
        </div>
        
         <div className='aboutimp-image-div'>
            <img src="https://images.unsplash.com/photo-1609196119588-15e77a42bf70?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0cyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"></img>
        </div>
        
       

    </div>
  )
}

export default AboutImportantsection