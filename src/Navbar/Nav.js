import React from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "../Carrito/CartWidget"
import { productosIniciales } from "../utils"
import './estilos.css';

const Nav = ({ isHeader }) => {

    const categorias = productosIniciales.map((item) => {
        return (
            <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
                {item.category}
            </NavLink>
        )
    })

    return (




<nav className="navbar navbar-expand-lg bg-light">

  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/productos" className="navbar-brand">productos</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/productos/accion" className="navbar-brand">Accion</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/productos/aventura" className="navbar-brand">Aventura</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/productos/zombie" className="navbar-brand">Horror</NavLink>
        </li>
      </ul>
    </div>
  </div>

  <CartWidget/>
</nav>









    )

}

export default Nav