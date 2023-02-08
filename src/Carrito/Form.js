import React from 'react'
import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { db } from "../firebase"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const Form = ({context,id}) => {
    const MySwal = withReactContent(Swal);
    const refEmail = useRef() 
    const refEmailV = useRef()
    const refAge = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
        if(refEmail.current.value === refEmailV.current.value)
        {
            const orden = {
                buyer: {
                    name: refEmail.current.value,
                    phone: refAge.current.value,
                },
                products:[...context.productos],
                total:[context.cantidad],
                date : serverTimestamp()
            }
    
            const ordersCollection = collection(db, "orders")
            const consulta = addDoc(ordersCollection,orden)
    
            consulta
                .then((docRef) => {
                    id = docRef.id
                    context.vaciarCarrito()
                })
                MySwal.fire({
                    title: <strong>Gracias por su compra!</strong>,
                    html: <i>A continuacion, anote su codigo de verificacion {id}</i>,
                    icon: 'success'
                    })
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los correos electronicos no coinciden',
              }) 
        }
        
}
if(!id){
    return(
        <div className="register">
            <form onSubmit={handleSubmit} className="carrito-form">
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input required ref={refEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Email</label>
                <input required ref={refEmailV} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input required ref={refAge} type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
                <button className="btn btn-primary btn-r">Finalizar compra</button>
            </form>
    </div>
    )
    
}

}

export default Form