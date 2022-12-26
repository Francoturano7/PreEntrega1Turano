import React, {useState} from 'react';
import MyButton from '../MyButton';
import "./Item.css";
import {Link} from "react-router-dom";

function Item(props) {
  const[isFavorite,setIsFavorite]=useState(false);

const handleFavorite=()=>{
  setIsFavorite(!isFavorite)
};
let classNameFavBtn= isFavorite?"card-favicon favorite  ": "card-favicon";
let textFavorite=isFavorite?"Agregado a favorito!": "Agregar a favorito";

const urlDetail = `/item/${props.id}`;
  return (
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
  
      
      <div className="card-body text-center font-fam" >
        <div className='contenedor-corazon '>
    <small className='text-favorite '>{textFavorite}</small>
      <button onClick={handleFavorite} className={classNameFavBtn} >♡</button>
   </div>
        <div className="card-title"> <h3>{props.title}</h3></div>
      <img className="card-img top" src={props.imgurl} alt={props.title} />
        <div className="card-text">
        <h3>${props.price}</h3>
        </div>
       
        <h6 className='separar' style={{color:"darkred"}} >Stock: {props.stock} unidades</h6>
      </div>
      <Link to={urlDetail}>
        <MyButton text="Ver mas" color={props.color} colorLetra={props.colorLetra}/>
      </Link>
      <div>
      {props.discount && <small className='verde font-fam'>{props.discount} off</small>}
       {props.envio && <small className='verde font-fam'>ENVIO {props.envio} </small>}
      </div>
    </div>
    
  )
}

export default Item