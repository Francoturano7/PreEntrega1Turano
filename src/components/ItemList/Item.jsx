import React, {useState} from 'react';
import MyButton from '../MyButton';
import "./Item.css";
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";

function Item(props) {
  const[isFavorite,setIsFavorite]=useState(false);

const handleFavorite=()=>{
  setIsFavorite(!isFavorite)
};
let classNameFavBtn= isFavorite?"card-favicon favorite": "card-favicon";
let textFavorite=isFavorite?"Agregado a favorito!": "Agregar a favorito";

const urlDetail = `/item/${props.id}`;
  return (
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
  
      
      <div className="card-body text-center font-fam" >
        <div className="card-title"> <h3>{props.title}</h3></div>
      <img className="card-img top" src={props.imgurl} alt={props.title} />
        <div className="card-text">
        <h3>${props.price}</h3>
        <MyButton text="Comprar" color={props.color} colorLetra={props.colorLetra}/>
        <ItemCount stock={props.stock} start={1} />
        </div>
        <h5 className='separar'>DESCRIPCION:</h5>
        <h6 className='separar'>{props.description}</h6>
        <div className='contenedor-corazon'>
    <small className='text-favorite'>{textFavorite}</small>
      <button onClick={handleFavorite} className={classNameFavBtn} >♡</button>
   </div>
        <h7 className='separar' style={{color:"red"}} >Stock: {props.stock} unidades</h7>
      </div>
      <Link to={urlDetail}>
        <MyButton text="Ver mas" color={props.color} colorLetra={props.colorLetra}/>
      </Link>
    </div>
    
  )
}

export default Item