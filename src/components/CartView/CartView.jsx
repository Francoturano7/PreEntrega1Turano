import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import MyButton from '../MyButton';
import "../CartView/CartView.css" ;
import { createOrder } from '../../Services/firestore';
import {useNavigate} from "react-router-dom";

function CartView() {
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);
    let navigate = useNavigate();
    
    if (cart.length === 0 ) 
    return(<div>

        
        <h1 className='greeting marginar' >Carrito de compras vacio</h1>
    </div>
    ) ;

async function handleCheckout(evt){
    const order={
        buyer:{
            name:"Franco",
            email:"francoturano@gmail.com",
            phone:"11223344"
        },
        items:cart,
        total:0,
        date: new Date(),
    };
  const orderId= await createOrder(order);
  navigate(`/thankyou/${orderId}`)
}

  return (
      
   <div>
       <h1 className='greeting'>Carrito de compras</h1>
       <table className='table table-bordered table-hover'>
           <thead>
               <tr className='head-tabla'>
                   <th >PRODUCTO</th>
                   <th>PRECIO</th>
                   <th>CANTIDAD</th>
                   <th>ELIMINAR</th>


               </tr>
           </thead>
           <tbody>

       {cart.map((item)=>(
           <tr key={item.id} className='body-tabla bg-success'>
               <td >{item.title}</td>
               <td>${item.price}</td>
               <td >{item.count} </td>
               <MyButton onClick={()=>removeItem(item.id)} text="x" color="darkred" colorLetra={item.colorLetra}></MyButton>
               </tr>
       ))}
           </tbody>
       </table>
       <div>
      <h3 className='total'>Total de todos los productos: $ {priceInCart}</h3>
      <MyButton onClick={handleCheckout} text="Finalizar Compra" color="darkgreen" colorLetra="white"></MyButton>
       <MyButton onClick={()=>clear()} text="Vaciar carrito" color="darkblue" colorLetra="white"></MyButton>
       
       </div>
   </div>
  );
}

export default CartView