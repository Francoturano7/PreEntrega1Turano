import React from 'react';
import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const miContext= useContext(cartContext)
  return (
 
    <Link to="/cart">
       <div className='carrito'>
        
      <img className='carrito-car' src="../imgs/carrito1.jpeg" alt="logoCarrito"/> 
     
      <span className='carrito-num'>{miContext.itemsInCart()}</span>
    </div>
      </Link>  
  )
}

export default CartWidget