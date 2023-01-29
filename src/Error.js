import React from "react";
import { Link } from "react-router-dom";
import './estilos.css';
const Error404 = () =>{
    return(
        <div className="container-error">
            <div className="imagen">
                <img src="./mike.jpg"></img>
            </div>
            <div className="text">
                <h1>404</h1>
                <h3>UPS</h3>
                <p> Parece que la pagína donde quiere dirigirse dejo de funcionar o ya no exíste. 
                Esto puede deberse a varíos factores. Pero no se preocupe.
                Puede volver tocando este boton</p>
                <button className="btn btn-success">
                    <Link to="/">Volver a estar a salvo</Link>
                </button>
            </div>
        </div>
    )
}

export default Error404;