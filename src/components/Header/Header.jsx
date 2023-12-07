import React, { useContext } from 'react'
import './header.css';
import { TypeAnimation } from 'react-type-animation'

import ToggleComponent from '../Toggle/ToggleComponent';
import Navigation from '../Navigation/Navigation';
import { DarkModeContext } from '../../context/DarkModeContext';

function Header() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className='header'>
    <div className='header-nav'>
        <div className='image-div'>
            <img className='icon-image' src="\TOOTYFRUITY.png" alt="icon"></img>
          
        </div>
        <div className={darkMode ? 'heading-div-dark':'heading-div'}>
              <TypeAnimation sequence={["DISCOVER YOUR FRUIT PLATE",1000,"EAT BETTER FEEL BETTER",1000]} speed={50} repeat={Infinity} style={{fontSize:"1.5em",fontWeight:"bold"}}>

              </TypeAnimation>
        </div>
        
        <ToggleComponent />
    </div>
    <Navigation/>
    </div>
  )
}

export default Header