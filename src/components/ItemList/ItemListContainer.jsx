import React from 'react'
import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <h2>Mis Productos..</h2>
        <Item 
        imgurl="/imgs/remera.jpeg"
        title="Remera Puma"
        price={100}
        description="Remera 100% algodon, disponible del talle S al XXL"
        color="#04AA6D"
        colorLetra="white"
        stock={6}
        />
        <Item imgurl="/imgs/pantalon.jpeg"
        title="Pantalon TRNG"
        price={200}
        description="Pantalon deportivo negro con cierre en los bolsillos, disponble del talle L al XL"
        color="#04AA6D"
        colorLetra="white"
        stock={10}

        />
        <Item imgurl="/imgs/zapatillas.jpeg"
        title="Zapatilla Nike F22"
        price={400}
        description="Zapatillas negras indoor, disponible del talle 37 al 43"
        color="#04AA6D"
        colorLetra="white"
        stock={8}

        />

    </div>
  )
}

export default ItemListContainer