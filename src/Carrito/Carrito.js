import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "../firebase"
import Item from '../Item/Item'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './estilos.css';
const MySwal = withReactContent(Swal);
const Carrito = () => {
    const valorDelContexto = useCarrito()
    const refEmail = useRef() 
    const refEmailV = useRef()
    const refAge = useRef()
    const [id, setId] = useState("")
    const handleSubmit = (e) => {
            e.preventDefault()
            if(refEmail.current.value === refEmailV.current.value)
            {
                const orden = {
                    buyer: {
                        name: refEmail.current.value,
                        phone: refAge.current.value,
                    },
                    products:[...valorDelContexto.productos],
                    total:[valorDelContexto.cantidad],
                    date : serverTimestamp()
                }
        
                const ordersCollection = collection(db, "orders")
                const consulta = addDoc(ordersCollection,orden)
        
                consulta
                    .then((docRef) => {
                        setId(docRef.id)
                        valorDelContexto.vaciarCarrito()
                    })
                    .then((error)=>{
                        MySwal.fire({
                            title: <strong>Gracias por su compra!</strong>,
                            html: <i>A continuacion, anote su codigo de verificacion</i>,
                            icon: 'success'
                          })
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

   if(valorDelContexto.productos.length)    
   {
    return (
        <div>       
            <button onClick={valorDelContexto.vaciarCarrito} className="btn btn-warning btn-r">Vaciar Carrito</button>
            <div className="item-r">
            {     
                valorDelContexto.productos.map((item)=>{
                    return(
                        <div className="carrito" key={item.id}>
                            <div >
                                {
                                    item.cantidad ? 
                                    <div>
                                    <Item title={item.title} images={item.images} price={item.price * item.cantidad} id={item.id} stock={item.cantidad}/>
                                        <button className="btn btn-success" onClick={() => valorDelContexto.agregarItem(item)}>Agregar</button>
                                        <button className="btn btn-danger btn-red" onClick={() => valorDelContexto.borrarItem(item)}>Borrar</button>
                                    </div>
                                    :
                                    // Problema
                                    valorDelContexto.vaciarCarrito()
                                    
                                }
                                
                            </div>
                                
                        </div>
                    )
                })
            }  
            </div>
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
    </div>
    )
   }
   else
   {
        if(!id)
        {
                
            return(
                <div>
                    <p>El carrito se encuentra vacio</p>
                </div>
            )
        }
        else
        {
            return(
                <><h3>Felicidades, su codigo es {id} gracias por comprar</h3></>
            )
        }  
   }
}

export default Carrito