
import ItemCount from '../ItemList/ItemCount';
import "./ItemDc.css";

import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

function ItemDetail({producto}) {
  const {addToCart} = useContext(cartContext);
    function onAddToCart(count){
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
      
      <ItemCount onAddToCart={onAddToCart} color={producto.color} colorLetra={producto.colorLetra} stock={producto.stock} start={1} />
      
      </div>
      <h5 className='separar'>DESCRIPCION:</h5>
      <h6 className='separar'>{producto.description}</h6>
      <h6 className='separar' style={{color:"darkred"}} >Stock: {producto.stock} unidades</h6>
      
    </div>
  </div>
      </div>
  )
}

export default ItemDetail