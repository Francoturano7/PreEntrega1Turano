import React from 'react';
import MyButton from '../MyButton';
import "./Item.css";

function Item(props) {
  return (
  
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
      <img className="card-img top" src={props.imgurl} alt={props.title} />
      <div className="card-body text-center" >
        <div className="card-title"> <h3>{props.title}</h3></div>
        <div className="card-text">
        <p>${props.price}</p>
        <MyButton text="ver mas" color="#04AA6D"/>
        </div>
      </div>
    </div>
    
  )
}

export default Item