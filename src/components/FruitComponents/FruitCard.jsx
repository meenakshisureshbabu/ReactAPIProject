import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import '../FruitComponents/fruitcard.css'


function FruitCard() {

  const id = 52;
  const [fruitdata,setFruitdata] = useState();
  const apiurl = `https://www.fruityvice.com/api/fruit/${id}`;

  const getFruitData = async() => {
    const response = await fetch(apiurl);
    const data = await response.json();
    setFruitdata(data);
  }
  useEffect(() => {
    getFruitData()
  })

  return (
    <div className='fruit-card-div'>
        <div className="inner-card-div">
          <span className='"close'><IoIosCloseCircle /></span>
            <div className='fruit-header'>
                <div><h3>Mango</h3></div>
                <div>Family: Anacardiaceae</div>
                <div className='nutrients-header-div'>
                    <div><h4>Nutrients</h4></div>
                    <div>Calories: 60</div>
                    <div>Fat: 0.38</div>
                    <div>Sugar: 13.7</div>
                    <div>Carbohydrates: 11.4</div>
                    <div>Protein: 0.4</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default FruitCard