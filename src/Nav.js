import React from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { productosIniciales } from "./utils"

const Nav = ({ isHeader }) => {

    const categorias = productosIniciales.map((item) => {
        return (
            <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
                {item.category}
            </NavLink>
        )
    })

    return (
        <nav className="nav">
            {!isHeader && categorias }
            <NavLink className="nav__link link" to="/productos">productos</NavLink>
            <NavLink className="nav__link link" to="/productos/clothing">clothing</NavLink>
            <NavLink className="nav__link link" to="/productos/jewelery">jewelery</NavLink>
            <CartWidget />
        </nav>
    )

}

export default Nav