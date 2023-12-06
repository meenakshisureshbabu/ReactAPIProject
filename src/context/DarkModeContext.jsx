import React from 'react'
import { createContext,useState } from 'react'

export const DarkModeContext = createContext();

function DarkModeProvider(props) {

    const [darkMode,setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div>
        <DarkModeContext.Provider value={{darkMode,toggleMode}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export default DarkModeProvider