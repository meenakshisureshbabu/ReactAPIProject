import React from 'react'
import './header.css';
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <nav className='header-nav'>
        <div className='image-div'>
            <img className='icon-image' src="https://static.vecteezy.com/system/resources/previews/026/497/171/non_2x/fruits-in-plate-ai-generative-free-png.png" alt="icon"></img>
        </div>
        <div className='menu-div'>
            <div>About</div>
            <div>Eat Healthy</div>
        </div>
        <div className='search-div'>
            <input type='text' placeholder='Search'/>
            <FaSearch />
        </div>
    </nav>
  )
}

export default Header