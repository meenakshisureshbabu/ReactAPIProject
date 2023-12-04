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

                <div><h2 className='dataname'>{data.name}</h2></div>
                <div><p className='familyname'>Family: {data.family}</p></div>
                <div className='nutrients-header-div'>
                    <div className='nutrients'><h4>Nutrients</h4></div>
                    <div className='calories'>Calories: <div>{data && data.nutritions && data.nutritions.calories}</div></div>
                    <div className='fat'>Fat: <div>{data && data.nutritions && data.nutritions.fat}</div></div>
                    <div className='sugar'>Sugar: <div>{data && data.nutritions && data.nutritions.sugar}</div></div>
                    <div className='carbo'>Carbohydrates: <div>{data && data.nutritions && data.nutritions.carbohydrates}</div></div>
                    <div className='protein'>Protein: <div>{data && data.nutritions && data.nutritions.protein}</div></div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default FruitCard