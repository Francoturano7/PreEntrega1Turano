import React, {memo} from "react";
import Item from "./Item";

function ItemList({products}) {
    return (
        <div className=" img-fondo">
            <h1 className="greeting">Bienvenidos a Bati Indumentaria!!</h1>
            <h2 className='titulo-producto'>Productos</h2>
            <div className=" item-list">
           {
             products.map((product)=>{
               return(
               <Item 
               id={product.id}
               key={product.id}
               imgurl={product.imgurl}        
               title={product.title}
               price={product.price}
               description={product.description}
               color={product.color}
               colorLetra={product.colorLetra}
               stock={product.stock}
               categoria={product.categoria}
               discount={product.discount}
               envio={product.envio}
               />
               );
                   })
           }
            </div>
    
        </div>
      )
}
export default memo(ItemList);