import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicImage from "./DynamicImage.js";

 
export default function Star() {
  let arrStar = localStorage.getItem("stars")
  if(!arrStar){
    arrStar = [true, true, true, true, true]
  }else{
    arrStar = JSON.parse(arrStar)
  }
    let [clicked, setClicked] = useState(arrStar);
    let [firstClicked, setFirstClicked] = useState(false)
    let navigate =useNavigate();

    function handleClicked(index){
      if (!firstClicked){

      
      if(index>2){
        window.open("https://www.google.com/maps/place/Kozak+Ukrainian+Restaurant/@49.2827253,-123.1068012,17z/data=!4m7!3m6!1s0x5486719345d2458f:0x7f16a5982a0ee698!8m2!3d49.2826453!4d-123.1046471!9m1!1b1", "_self")
      }else{
        navigate("/unsuccess")
      }
        let arrStar = Array(5).fill(false).fill(true, 0, index+1)
        setClicked(arrStar)
        localStorage.setItem("stars", JSON.stringify(arrStar))
        setFirstClicked(true);
    }
  }
  return [
    <>
<DynamicImage length= 
{ firstClicked ? arrStar.filter(Boolean).length : 0 }
/>



      <svg id="stars" style={{ display: "none" }} version="1.1">
        <symbol id="stars-empty-star" viewBox="0 0 153 27" fill="#F1E8CA" >
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </symbol>
        <symbol id="stars-full-star" viewBox="0 0 153 27" fill="#D3A81E" >
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </symbol>
      </svg>
      <svg aria-hidden="true" focusable="false" className="rating">
      {clicked.map((item, index)=> <StarRate key={index} clicked={item} setClicked ={()=>handleClicked(index)}/>)}
      
      </svg>
    </>,
  ];
}

function StarRate({clicked, setClicked}) {
 
  return clicked ? (
    <use xlinkHref="#stars-full-star" onClick={()=>setClicked(false)} />
  ) : (
    <use xlinkHref="#stars-empty-star"onClick={()=>setClicked(true)}  />
  );

}
