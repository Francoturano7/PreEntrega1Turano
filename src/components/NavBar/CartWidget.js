import React from 'react';
import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from '../../context/cartContext';
function CartWidget() {
  const miContext= useContext(cartContext)
  return (
    <div className='carrito'>
      <img className='carrito-car' src="../imgs/carrito1.jpeg" alt="logoCarrito"/> 
     
      <span className='carrito-num'>{miContext.itemsInCart()}</span>
    </div>
  )
}

export default CartWidget