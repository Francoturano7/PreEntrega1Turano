import ItemCount from '../ItemList/ItemCount';
import "./ItemDc.css";

import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import MyButton from '../MyButton';
import { Link } from 'react-router-dom';

function ItemDetail({producto}) {
 const[isInCart, setIsInCart]= useState(false)
  const {addToCart} = useContext(cartContext);
    
  
  function onAddToCart(count){
      setIsInCart(count);
      addToCart(producto,count)
    }
  return (
      <div className="fondo">
          <h1 className="greeting">Producto Seleccionado</h1>
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
    <div className="card-body text-center font-fam" >
      <div className="card-title"> <h3>{producto.title}</h3></div>
    <img className="card-img top" src={producto.imgurl} alt={producto.title} />
      <div className="card-text">
      <h3>${producto.price}</h3>
      {
        isInCart ?
      <Link to="/cart">
         <MyButton text="Ir al carrito" color={producto.color} colorLetra={producto.colorLetra}></MyButton>
      </Link>

  
       : <ItemCount onAddToCart={onAddToCart} color={producto.color} colorLetra={producto.colorLetra} stock={producto.stock} start={1} />
      }
      </div>
      <h5 className='separar'>DESCRIPCION:</h5>
      <h6 className='separar'>{producto.description}</h6>
      <h6 className='separar' style={{color:"darkred"}} >Stock: {producto.stock} unidades</h6>
      {producto.discount && <small className='verde font-fam'>{producto.discount} off</small>}
       {producto.envio && <small className='verde font-fam'>ENVIO {producto.envio} </small>}
    </div>
  </div>
      </div>
  )
}

export default ItemDetail