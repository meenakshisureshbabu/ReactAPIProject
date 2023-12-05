import React from 'react'
import './header.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'
import { SiGooglemaps } from "react-icons/si";



function Header() {
  return (
    <nav className='header-nav'>
        <div className='image-div'>
            <img className='icon-image' src="https://static.vecteezy.com/system/resources/previews/026/497/171/non_2x/fruits-in-plate-ai-generative-free-png.png" alt="icon"></img>
        </div>
        <div className='heading-div'>
              <TypeAnimation sequence={["DISCOVER YOUR FRUIT PLATE",1000,"EAT BETTER FEEL BETTER",1000]} speed={50} repeat={Infinity} style={{fontSize:"2em",fontWeight:"bold"}}>

              </TypeAnimation>
        </div>
        <div className='menu-div'>
            <ul className='menu-list'>
                <Link to="/">
                <li><img className="about-icon" src="https://static.thenounproject.com/png/2940539-200.png"></img> About</li>
                </Link>
                <Link to="/kyf">
                <li><img className="kyf-icon"src="https://t4.ftcdn.net/jpg/04/19/88/61/360_F_419886166_78r9vX0ngjIooGYo5Q88Z2TR9bYrOfQL.jpg"></img>Know about your fruit</li>
                </Link>
                <a href="https://www.google.com/maps/search/grocery+store+near+me/" target='_blank'>
                <li><SiGooglemaps />Spot Grocery Store</li>
                </a>
            </ul>
            
        </div>
        
    </nav>
  )
}

export default Header