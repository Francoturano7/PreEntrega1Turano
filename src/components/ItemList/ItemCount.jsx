
import "./Item.css";
import './ItemListContainer';
import "./ItemCount.css";
import MyButton from '../MyButton';
import React, {useState} from 'react';


function ItemCount({stock, onAddToCart}) {
    let [count, setCount] = useState(1);
    function handleClickMas() {
      if (count < stock) setCount(count + 1);
    }
    function handleClickMenos() {
      if (count > 1) setCount(count - 1);
    }
    
    return (
      <div>
        
        <MyButton onClick={handleClickMenos} colorLetra="white" color="darkred" text="-"></MyButton>
        <span className='numero' >{count}</span>
        <MyButton onClick={handleClickMas} colorLetra="white" color="darkgreen" text="+"></MyButton>
        <div className='btn-itemcount'>
        <MyButton onClick={()=>onAddToCart(count)} text="Comprar" color="#5f2ed1" colorLetra="white"></MyButton>
        </div>

      </div>
    );
  }
  export default ItemCount;