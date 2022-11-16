import { useState, useEffect } from 'react';
import {getSingleItem} from '../../Services/mockService';   
import ItemDetail from './ItemDetail';
import "./ItemDc.css";
import {useParams} from "react-router-dom";


function ItemDetailContainer() {
  const [producto, setProducto]= useState([]);
  const {id}= useParams();
  
  useEffect(()=>{
      getSingleItem(id).then((respuestaDatos)=>{
        setProducto(respuestaDatos);
    });
},[]);
  return(
<div className="fondo">

    <ItemDetail producto={producto}/>
</div>
  ) 
}

export default ItemDetailContainer