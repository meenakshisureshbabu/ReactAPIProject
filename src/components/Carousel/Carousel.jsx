import React, { useState } from 'react'
import CarouselItems from './CarouselItems'
import '../Carousel/carousel.css'
import carouseldata from '../../models/carouseldata';
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";


function Carousel() {

    const [activeIndex,setActiveIndex] = useState(0)
    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = 0;
        }else if(newIndex >= carouseldata.length){
            newIndex = carouseldata.length-1;
        }
    setActiveIndex(newIndex)
    }
  return (
    <div className='carousel-div'>
        <div className='inner-carousel' style={{transform:`translate(-${activeIndex *100}%)`}}>
            <CarouselItems/>
        </div>
        <div className='carousel-buttons'>
            <button onClick={() => {updateIndex(activeIndex-1)}}><FaBackward/></button>
            <button onClick={() => {updateIndex(activeIndex+1)}}><FaForward/></button>
        </div>
    </div>
  )
}

export default Carousel