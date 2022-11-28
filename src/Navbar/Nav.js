import React from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "../Carrito/CartWidget"
import { productosIniciales } from "../utils"

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
            {!isHeader && categorias }
            <NavLink className="navbar-brand" to="/">Home</NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">      
        <NavLink className="nav-link active" to="/productos">productos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/productos/accion">Accion</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/productos/aventura">Aventura</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/productos/zombie">Zombie</NavLink>

        </li>
        <li className="nav-item">
        <CartWidget />

        </li>
        
      </ul>
    </div>
  </div>
</nav>



    )

}

export default Nav