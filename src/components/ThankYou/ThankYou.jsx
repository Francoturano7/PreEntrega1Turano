import React from 'react';
import { useParams } from 'react-router-dom';
function ThankYou() {
    const idOrder=useParams().idOrder;
  return (
    <div className=' marginar-menos'>
        <h1 className='greeting'>Gracias por tu compra</h1>
        <h3 className='total marginar-'>El ID de tu compra es: <strong>{idOrder}</strong></h3>
    </div>
  )
}

export default ThankYou