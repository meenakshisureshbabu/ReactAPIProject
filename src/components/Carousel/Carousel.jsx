import React, { useContext, useState } from 'react'
import CarouselItems from './CarouselItems'
import '../Carousel/carousel.css'
import carouseldata from '../../models/carouseldata';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { DarkModeContext } from '../../context/DarkModeContext';


function Carousel() {

    const [activeIndex,setActiveIndex] = useState(0)
    const {darkMode} = useContext(DarkModeContext)
    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = carouseldata.length-1;
        }else if(newIndex >= carouseldata.length){
            newIndex = 0;
        }
    setActiveIndex(newIndex)
    }
  return (
    <div className={darkMode ? `carousel-div-dark` : `carousel-div`}>
        <div className='inner-carousel' style={{transform:`translate(-${activeIndex *100}%)`}}>
            <CarouselItems/>
        </div>
        <div className='carousel-buttons'>
            <button onClick={() => {updateIndex(activeIndex-1)}}><FcPrevious/></button>
            <button onClick={() => {updateIndex(activeIndex+1)}}><FcNext/></button>
        </div>
    </div>
  )
}

export default Carousel