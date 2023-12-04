import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import '../FruitComponents/fruitcard.css'


function FruitCard() {

  const id = 52;
  const [data,setData] = useState([]);
  const apiurl = `/api/fruit/${id}`;
  
  const getFruitData = async () => {
    const resp = await fetch(apiurl);
    const data = await resp.json();
    console.log(data);
    setData(data);
  };
  
  useEffect(() => {
    console.log("Inside useEffect")
    getFruitData();
  });

  return (
    <div className='fruit-card-div'>
        <div className="inner-card-div">
          <span className='"close'><IoIosCloseCircle /></span>
            <div className='fruit-header'>

                <div><h3>{data.name}</h3></div>
                <div>Family: {data.family}</div>
                <div className='nutrients-header-div'>
                    <div><h4>Nutrients</h4></div>
                    <div>Calories: {data && data.nutritions && data.nutritions.calories}</div>
                    <div>Fat: {data && data.nutritions && data.nutritions.fat}</div>
                    <div>Sugar: {data && data.nutritions && data.nutritions.sugar}</div>
                    <div>Carbohydrates: {data && data.nutritions && data.nutritions.carbohydrates}</div>
                    <div>Protein: {data && data.nutritions && data.nutritions.protein}</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default FruitCard