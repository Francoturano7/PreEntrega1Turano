import React from 'react'
import CartWidget from '../CartWidget'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <h2>Mi Tienda</h2>
          </a>
        </li>
        <li>
          <a href="/">Item1</a>
        </li>
        <li>
          <a href="/">Item2</a>
        </li>
        <li>
          <a href="/">Item3</a>
        </li>
        <li>
          <CartWidget/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar