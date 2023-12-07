import React, { useState } from 'react'
import '../Navigation/navigation.css'
import { Link } from 'react-router-dom';
import { SiGooglemaps } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";



function Navigation() {

    
  return (
    <div className='nav-menu-div'>
        <div className='menu-div'>
            
            <div className='menu-list-div'>
            <ul className='menu-list'>
                <Link to="/">
                <li>
                  {/* <img className="about-icon" src="https://static.thenounproject.com/png/2940539-200.png"></img>  */}
                  ABOUT</li>
                </Link>
                <Link to="/kyf">
                <li>
                  {/* <img className="kyf-icon"src="https://t4.ftcdn.net/jpg/04/19/88/61/360_F_419886166_78r9vX0ngjIooGYo5Q88Z2TR9bYrOfQL.jpg"> </img>*/}
                  NUTRITION</li>
                </Link>
                <a href="https://www.google.com/maps/search/grocery+store+near+me/" target='_blank'>
                <li><SiGooglemaps />Spot Grocery Store<LuExternalLink/></li>
                </a>
                <Link to='/contact'>
                  <li>
                    CONTACT US
                  </li>
                </Link>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation