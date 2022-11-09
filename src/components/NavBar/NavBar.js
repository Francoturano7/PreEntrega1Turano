import React from 'react'
import CartWidget from './CartWidget';
import "./NavBar.css";

function NavBar() {
  return (
    <>
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark' >
      <div className="container-fluid bg-dark">
  <a className="navbar-brand " href="#home"><img className=" logo"src="./imgs/logoR.jpeg" alt="logoNavbar"/></a>
  

    <ul className='navbar-nav mx-auto ' >
  <li><a className='active ' href="#news">Productos</a></li>
  <li><a href="#">Contacto</a></li>
  <li><a href="#">Seguinos</a></li>
</ul>
   <a  className='carro'  href="#"><CartWidget  /></a>
      </div>
    </nav>
    </>
  )
}

export default NavBar
