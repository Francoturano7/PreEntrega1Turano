import React from 'react';
import MyButton from '../MyButton';
import "./Item.css";

function Item(props) {
  return (
    <div className='card'> 
     <div className='card-detail'>
        <h3>{props.title}</h3>
        </div>
        <div className='card-img' >
        <img src={props.imgurl} alt={props.title} />

        </div>
        <div className='card-detail'>
        <p>${props.price}</p>
        <MyButton text="ver mas" color="darkgreen"/>
      </div>
    </div>
  )
}

export default Item