import React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"

function Header() {
    return (
        <header id="main-header" className="header">
            <Link to="/" className="link">
                <h1>titulo</h1>
            </Link>
            <Nav isHeader />
        </header>
    )
}

export default Header