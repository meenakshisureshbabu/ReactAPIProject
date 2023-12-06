import React, { useContext } from 'react'
import './aboutpage.css'
import { DarkModeContext } from '../../context/DarkModeContext'

function Aboutpage() {

    const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? `howmuchfruituneeddark` : `howmuchfruituneed`}>
        <div className='girlbitingimg-div'>
            <img className="girlbitingimg" src="https://images.unsplash.com/photo-1585909085111-2c2f311643af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMCUyMGVhdGluZyUyMGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
        <div className={darkMode ? `howmuchfruituneed-sidediv-dark` : `howmuchfruituneed-sidediv`}>
            <div className='howmuchfruituneed-sidediv-content'>
                <h1>How much fruit should I eat each day?</h1>
                <p>Your fruit needs depend on your age, sex, height, weight, and physical activity. This amount can also depend on whether you are pregnant or breastfeeding.
                    Find the right amount of carbohydrates, sugar levels for you by visiting Know About your fruit. For general guidance by age, see the table below.</p>
                <h1>What counts as a cup of fruit?</h1>
                <p>
                In general, the following counts as 1 cup from the Fruit Group:
                <ul className='fruitneedlist'>
                    <li>1 cup of fruit</li>
                    <li>1/2 cup of dried fruit</li>
                    <li>1 cup of 100% juice</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Aboutpage