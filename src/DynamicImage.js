import React, { useEffect } from "react";
import confusion_1 from "./images/confusion_1.svg";
import confusion_2 from "./images/confusion_2.svg";
import confusion_3 from "./images/confusion_3.svg";
import logo_Kozak from "./images/Logo_Kozak.svg";
import success from "./images/success.svg";
import {success as cb } from "./success.js"
import "./images.css";

export default function DynamicImage({ length }) {
  let obj = {
    0: logo_Kozak,
    1: confusion_1,
    2: confusion_2,
    3: confusion_3,
    4: success,
    5: success,
  };

  let text ={
    0:"Rate your visit at Kozak Ukrainian Restaurant. We’re always looking to improve ourselves and provide best customers experience",
    1:"Sorry to hear that. Please tell us more about your experience today",
    2:"Sorry to hear that. Please tell us more about your experience today",
    3:"Sorry to hear that. Please tell us more about your experience today",
    4:"Thank you for your visit today. Please help us become a top-10 most rated restaurant in Vancouver. Leave a short review to make it happen",
    5:"Thank you for your visit today. Please help us become a top-10 most rated restaurant in Vancouver. Leave a short review to make it happen" 
  };

  useEffect(() => { 
    if (length >= 4) {
      cb();
    }
  }, [length]);

  const sentences = text[length].split('.');
  const sentence1 = sentences[0];
  const sentence2 = sentences[1];

  return (
    <div style={{ textAlign: "center" }}>
      <img src={obj[length]} alt="DynamicReact" className="center" />
      <p className="text">{sentence1}.</p>
      <p className="text">{sentence2}</p>
    </div>
  );
}