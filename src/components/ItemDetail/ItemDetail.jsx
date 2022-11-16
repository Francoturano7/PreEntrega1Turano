import MyButton from '../MyButton';
import ItemCount from '../ItemList/ItemCount';
import "./ItemDc.css";
function ItemDetail({producto}) {
    
  return (
      <div className="fondo">
          <h1 className="greeting">Producto Seleccionado</h1>
    <div className="card mx-auto d-block"  style={{ width: '18rem' }}>
    <div className="card-body text-center font-fam" >
      <div className="card-title"> <h3>{producto.title}</h3></div>
    <img className="card-img top" src={producto.imgurl} alt={producto.title} />
      <div className="card-text">
      <h3>${producto.price}</h3>
      <MyButton text="Comprar" color={producto.color} colorLetra={producto.colorLetra}/>
      <ItemCount stock={producto.stock} start={1} />
      </div>
      <h5 className='separar'>DESCRIPCION:</h5>
      <h6 className='separar'>{producto.description}</h6>
      <h7 className='separar' style={{color:"red"}} >Stock: {producto.stock} unidades</h7>
      
    </div>
  </div>
      </div>
  )
}

export default ItemDetail