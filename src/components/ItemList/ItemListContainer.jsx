import React from 'react'
import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <h2>Mis Productos..</h2>
        <Item 
        imgurl="/imgs/remera.jpeg"
        title="Remera"
        price={100}
        />
        <Item imgurl="/imgs/pantalon.jpeg"
        title="Pantalon"
        price={200}
        />
        <Item imgurl="/imgs/zapatillas.jpeg"
        title="Zapatilla"
        price={400}
        />

    </div>
  )
}

export default ItemListContainer