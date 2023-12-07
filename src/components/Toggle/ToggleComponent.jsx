import React, { useContext } from 'react'
import '../Toggle/togglecomponent.css'
import { DarkModeContext } from '../../context/DarkModeContext'

function ToggleComponent() {

    const {darkMode,toggleMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleMode();
        console.log(darkMode);
    }



  return (
    <div className='toggle-container'>
        <label className={darkMode?'darklabel':'lightlabel'}>DarkMode</label>
        <div className='toggle-switch'>
            
            <input type="checkbox" className='checkbox' name="DarkMode" id="DarkMode" onClick={handleClick} checked={darkMode ? true : false}/>
            <label className='label' htmlFor='DarkMode'>
                <span className='inner'/>
                <span className='switch'/>
            </label>
        </div>
    </div>
  )
}

export default ToggleComponent