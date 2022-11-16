import React from 'react'
import CartWidget from './CartWidget';
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark' >
      <div className="container-fluid bg-dark">
  <Link className="navbar-brand " to="/"><img className=" logo"src="../imgs/logoR.jpeg" alt="logoNavbar"/></Link>
  

    <ul className='navbar-nav mx-auto ' >
  <li><Link className='active ' to="/">Productos</Link></li>
  <li><Link to="/category/remeras">Remeras</Link></li>
  <li><Link to="/category/pantalones">Pantalones</Link></li>
  <li><Link to="/category/calzado">Calzado</Link></li>
  <li><Link to="/category/gorras">Gorras</Link></li>


</ul>
   <Link  className='carro'  to="#"><CartWidget  /></Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar
