import React, { useEffect, useState } from "react";
import "../FruitComponents/fruitcard.css";

function FruitCard({ id }) {
  
  const [data, setData] = useState([]);
  const [isOpen,setIsOpen] = useState(false)
  const apiurl = `https://www.fruityvice.com/api/fruit/${id}`;
  

  useEffect(() => {
    const getFruitData = async () => {
      const resp = await fetch(apiurl);
      const data = await resp.json();
      console.log(data);
      setData(data);
    };
  
    console.log("Inside useEffect");
    isOpen && getFruitData();
  },[isOpen]);


  useEffect(() => {
    setIsOpen(true)
  },[])

  const loaded = () => {
    return (
  <div className="fruit-card-div">
    <div className="inner-card-div">
         
      <div className="fruit-header">
        
        <div className="dataname-div">
          <h2 className="dataname">{data.name}</h2>
        </div>
        <div className="familyname-div">
          <p className="familyname">Family: {data.family}</p>
        </div>
        <div className="nutrients-header-div">
          <div className="nutrients">
            <h4 style={{textDecoration:"underline"}}>Nutrients</h4>
          </div>
          <div className="calories">
            <div className="calorie-label">Calories:</div>
            <div className="calorie-data-div">{data && data.nutritions && data.nutritions.calories}</div>
          </div>
          
          <div className="fat">
          <div className="fat-label">Fat: </div>
            <div className="fat-data-div">{data && data.nutritions && data.nutritions.fat}</div>
          </div>
          <div className="sugar">
          <div className="sugar-label">Sugar:</div>
            <div className="sugar-data-div">{data && data.nutritions && data.nutritions.sugar}</div>
          </div>
          <div className="carbo">
          <div className="carbohydrate-label"> Carbohydrates:</div>
            <div className="carbohydrate-data-div">
              {data && data.nutritions && data.nutritions.carbohydrates}
            </div>
          </div>
          <div className="protein">
          <div className="protein-label">Protein:</div>
            <div className="protein-data-div">{data && data.nutritions && data.nutritions.protein}</div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

const loading = () => {
    return <h3>Buffering...</h3>
}

 

  return data ? loaded() : loading();
  
}

export default FruitCard;
