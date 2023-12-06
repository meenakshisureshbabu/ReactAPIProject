import React, { useContext } from 'react'
import '../Toggle/togglecomponent.css'
import { DarkModeContext } from '../../context/DarkModeContext'

function ToggleComponent() {

    const {darkMode,toggleMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleMode();
    }
  return (
    <div className='toggle-container'>
        <label>DarkMode</label>
        <div className='toggle-switch'>
            <input type="checkbox" className='checkbox' name="DarkMode" id="DarkMode" onClick={handleClick}/>
            <label className='label' htmlFor='DarkMode'>
                <span className='inner'/>
                <span className='switch'/>
            </label>
        </div>
    </div>
  )
}

export default ToggleComponent