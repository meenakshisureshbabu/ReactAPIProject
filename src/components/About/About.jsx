import React, { useContext, useRef } from 'react'
import './about.css'
import Header from '../Header/Header'
import Aboutpage from '../Aboutpage/Aboutpage'
import AboutImportantsection from '../AboutImportant/AboutImportantsection'
import Footer from '../Footer/Footer'
import { DarkModeContext } from '../../context/DarkModeContext'

function About() {

    const aboutpage = useRef(null);
    const aboutimp = useRef(null);
    const {darkMode} = useContext(DarkModeContext);

    const scrollToSection = (elementref) => {
        window.scrollTo({
            behavior: "smooth",
            top : elementref.current.offsetTop,
        })
    }
  return (
    <div className={darkMode ? `AboutContainerDark` : `AboutContainerlight`}>
        <Header/>
        <div className='about-div'>
        <div className='focus-div'>
            <img className='fruitwithkid' src="https://images.theconversation.com/files/60763/original/ydk6krh8-1412333088.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"/>
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
               <p onClick={() => scrollToSection(aboutpage)} className='howmuchpara'>How much fruit do you need?</p>
            </div>
            <div>
                <p onClick={() => scrollToSection(aboutimp)} className='howmuchpara'>Why is it important to eat fruit?</p>
            </div>
        </div>
        <div ref={aboutpage}>
            <Aboutpage/>
        </div>
        <div ref={aboutimp}>
            <AboutImportantsection/>
        </div>
        <div className='footer'>
        <Footer/>
        </div>
    </div>
  )
}

export default About