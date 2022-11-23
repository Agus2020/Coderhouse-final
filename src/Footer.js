import React from "react"
import Nav from "./Nav"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="redes footer__column">
                <a className="footer__link link" href="https://www.facebook.com/">facebook</a>
                <a className="footer__link link" href="https://www.instagram.com/">instagram</a>
                <a className="footer__link link" href="https://www.twitter.com/">twitter</a>
            </div>
            <div className="footer__column">
                <p>© 2020 - Todos os direitos reservados</p>
            </div>
            <div className="footer__column">
                <Nav isHeader={false}/>
            </div>
        </footer>
    )
}

export default Footer