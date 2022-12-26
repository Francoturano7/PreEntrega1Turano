import { useState, useEffect } from 'react';
import "./ItemListContainer.css";
import getItems from '../../Services/mockService';  
import {useParams} from "react-router-dom"; 
import ItemList from './itemList';
import Loader from '../Loaders/Loader';

function ItemListContainer() {
  const [products, setProducts]= useState(null);
  const {idCategory}= useParams();



  async function getItemsAsync(){
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }
  
  useEffect( ()=>{
      getItemsAsync();
      return () => {
        console.log("componente desmontado");
      };     
    }, [idCategory]);
return <div > {products ? <ItemList  products={products} /> : <Loader/>} </div>;

}

export default ItemListContainer;