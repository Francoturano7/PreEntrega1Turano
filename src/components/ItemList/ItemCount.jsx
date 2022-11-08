import React from 'react';
import "./Item.css";
import './ItemListContainer';
import "./ItemCount.css";


function ItemCount(props) {
    let [count, setCount] = React.useState(props.start);
    function handleClickMas() {
      if (count < props.stock) setCount(count + 1);
    }
    function handleClickMenos() {
      if (count > 1) setCount(count - 1);
    }
    return (
      <div>
        <button onClick={handleClickMenos}>-</button>
        <span className='numero' >{count}</span>
        <button onClick={handleClickMas}>+</button>
      </div>
    );
  }
  export default ItemCount;