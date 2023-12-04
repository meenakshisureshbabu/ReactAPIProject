import React from 'react'
import './about.css'
import Header from '../Header/Header'
import Aboutpage from '../Aboutpage/Aboutpage'

function About() {
  return (
    <div>
        <Header/>
        <div className='about-div'>
        <div className='focus-div'>
            <img className='fruitwithkid' src="https://images.unsplash.com/photo-1467453678174-768ec283a940?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMCUyMGVhdGluZyUyMGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"/>
            <div><h2>What foods are in the Fruit Group</h2></div>
            <div>The Fruit Group includes all fruits and 100% fruit juice. Fruits may be fresh, frozen, canned, or dried/dehydrated. Fruits can be eaten whole, cut up, pureed (mashed), or cooked. At least half of the recommended amount of fruit eaten should come from whole fruit, rather than 100% fruit juice.</div>
        </div>
       
        </div>
        <div className='second-part'>
            <div>
                <img className='howmuchfruitimg' src="https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-12/icon-measuring-cup--256.png?itok=fKnMBter"></img>
            </div>
            <div>
                <img className="whyimpimg" src='https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-12/icon-heart--256.png?itok=pHguwTiS'></img>
            </div>
        </div>

        <div className='third-part'>
            <div>
               <p>How much fruit do you need?</p>
            </div>
            <div>
                <p>Why is it important to eat fruit?</p>
            </div>
        </div>
        <Aboutpage/>
    </div>
  )
}

export default About