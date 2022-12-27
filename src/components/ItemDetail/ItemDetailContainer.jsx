import { useState, useEffect } from 'react';
import {getSingleItem} from '../../Services/firestore';   
import ItemDetail from './ItemDetail';
import "./ItemDc.css";
import {useParams} from "react-router-dom";
import Loader from '../Loaders/Loader';


function ItemDetailContainer() {
  const [producto, setProducto]= useState([]);
  const[isLoading, setIsLoading]= useState(true);
  const {id}= useParams();

  
  async function getItemsAsync(){
   getSingleItem(id).then(respuesta => {
     setProducto(respuesta);
     setIsLoading(false);
   })
  }
  useEffect(()=>{
      getItemsAsync();
  }, []);

  if(isLoading)
  return (<Loader/>)
  return(
<div className="fondo">

    <ItemDetail producto={producto}/>
</div>
  ) 
}

export default ItemDetailContainer