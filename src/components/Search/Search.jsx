import React from 'react'
import { FaSearch } from "react-icons/fa";
import '../Search/search.css'

function Search({handleInputChange}) {
  return (
    <div className='search-div'>
        <div><label className='searchlabel'>Search</label></div>
        <div><input type="text" className='searchtext' onChange={handleInputChange}></input></div>
        <div>
        <FaSearch style={{width:"20px",height:"20px"}}/>
        </div>
      </div>
  )
}

export default Search