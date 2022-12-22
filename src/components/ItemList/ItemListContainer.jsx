import { useState, useEffect } from 'react';
import Item from './Item';
import "./ItemListContainer.css";
import getItems from '../../Services/mockService';  
import {useParams} from "react-router-dom"; 

function ItemListContainer(props) {
  const [productos, setProductos]= useState([]);
  const {idCategory}= useParams();
  
  useEffect( ()=>{
      getItems(idCategory).then((respuestaDatos)=>{
        setProductos(respuestaDatos);
        
    });
},[idCategory]);
  return (
    <div className=" img-fondo">
        <h1 className="greeting">{props.greeting}</h1>
        <h2 className='titulo-producto'>Mis Productos..</h2>
        <div className=" item-list">
       {
         productos.map((producto)=>{
           return(
           <Item 
           id={producto.id}
           key={producto.id}
           imgurl={producto.imgurl}        
           title={producto.title}
           price={producto.price}
           description={producto.description}
           color={producto.color}
           colorLetra={producto.colorLetra}
           stock={producto.stock}
           categoria={producto.categoria}
           />
           );
               })
       }
        </div>

    </div>
  )
}

export default ItemListContainer