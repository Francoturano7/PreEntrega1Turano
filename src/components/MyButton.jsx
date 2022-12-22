import "./MyButton.css";
import React, {useState} from "react";

function MyButton(props){
  let [colorBtn, setColorBtn]=useState(props.color);
  let[colorLetra,setColorLetra]=useState(props.colorLetra);
  
  function handleClick(){
    setColorBtn("grey");
    setColorLetra("white"); 
    props.onClick && props.onClick();
  }
  
  
  return (
  <button
  onClick={handleClick}
  style={{backgroundColor:colorBtn, color:colorLetra, border:"1px solid black"}}
  className=" btn btn1 ">{props.text}</button>
  )
}
export default MyButton;