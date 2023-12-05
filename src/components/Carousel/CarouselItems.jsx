import React from 'react'
import carouseldata from '../../models/carouseldata'
import '../Carousel/carousel.css'


function CarouselItems() {
  return (
    <div className='carousel-data'>
        {
            carouseldata.map((data) => {
                return <div className='carousel-item'>
                    <div>
                        <img className="carousel-data-img" src={data.image} alt="#"/>
                    </div>
                    <div>
                        <ul>
                            <li>{data.description1}</li>
                            <li>{data.description2}</li>
                        </ul>
                    </div>
                    </div>
            })
        }
    </div>
    
  )
}

export default CarouselItems