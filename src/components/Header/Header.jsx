import React from 'react'
import './header.css';
import { TypeAnimation } from 'react-type-animation'

import ToggleComponent from '../Toggle/ToggleComponent';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <>
    <div className='header-nav'>
        <div className='image-div'>
            <img className='icon-image' src="https://cdn4.vectorstock.com/i/1000x1000/92/23/fruits-circle-icon-vector-17509223.jpg" alt="icon"></img>
          
        </div>
        <div className='heading-div'>
              <TypeAnimation sequence={["DISCOVER YOUR FRUIT PLATE",1000,"EAT BETTER FEEL BETTER",1000]} speed={50} repeat={Infinity} style={{fontSize:"1.5em",fontWeight:"bold"}}>

              </TypeAnimation>
        </div>
        
        <ToggleComponent />
    </div>
    <Navigation/>
    </>
  )
}

export default Header