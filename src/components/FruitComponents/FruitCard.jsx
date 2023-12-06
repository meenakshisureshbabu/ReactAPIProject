import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "../FruitComponents/fruitcard.css";

function FruitCard({ id }) {
  console.log("ID",id);
  const [data, setData] = useState([]);
  const [isOpen,setIsOpen] = useState(false)
  const apiurl = `/api/fruit/${id}`;
  console.log(apiurl)

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
          {/* <button className="closebutton" onClick={() => closeModal(false)}>
            &times;
          </button> */}
      <div className="fruit-header">
        
        <div>
          <h2 className="dataname">{data.name}</h2>
        </div>
        <div>
          <p className="familyname">Family: {data.family}</p>
        </div>
        <div className="nutrients-header-div">
          <div className="nutrients">
            <h4>Nutrients</h4>
          </div>
          <div className="calories">
            Calories:{" "}
            <div>{data && data.nutritions && data.nutritions.calories}</div>
          </div>
          <div className="fat">
            Fat: <div>{data && data.nutritions && data.nutritions.fat}</div>
          </div>
          <div className="sugar">
            Sugar:{" "}
            <div>{data && data.nutritions && data.nutritions.sugar}</div>
          </div>
          <div className="carbo">
            Carbohydrates:{" "}
            <div>
              {data && data.nutritions && data.nutritions.carbohydrates}
            </div>
          </div>
          <div className="protein">
            Protein:{" "}
            <div>{data && data.nutritions && data.nutritions.protein}</div>
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
