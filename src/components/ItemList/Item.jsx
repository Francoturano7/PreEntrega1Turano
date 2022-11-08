import React from 'react';
import MyButton from '../MyButton';
import "./Item.css";
import ItemCount from './ItemCount';

function Item(props) {
  return (
  
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
      <img className="card-img top" src={props.imgurl} alt={props.title} />
      <div className="card-body text-center" >
        <div className="card-title"> <h3>{props.title}</h3></div>
        <div className="card-text">
        <h3>${props.price}</h3>
        <MyButton text="Comprar" color={props.color} colorLetra={props.colorLetra}/>
        <ItemCount stock={props.stock} start={1} />
        </div>
        <h5 className='separar'>DESCRIPCION:</h5>
        <h6 className='separar'>{props.description}</h6>
        <h7 className='separar' style={{color:"red"}} >Stock: {props.stock} unidades</h7>

      </div>
    </div>
    
  )
}

export default Item