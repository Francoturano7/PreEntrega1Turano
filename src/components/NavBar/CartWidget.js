import React from 'react';
import "./CartWidget.css";
function CartWidget() {
  return (
    <div className='carrito'>
      <img className='carrito-car' src="../imgs/carrito1.jpeg" alt="logoCarrito"/> 
      <img className='carrito-num' src="../imgs/numero.webp" alt="numeroCarrito"/>
    </div>
  )
}

export default CartWidget