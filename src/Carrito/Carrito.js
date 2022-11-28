import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "../firebase"

const Carrito = () => {
    const valorDelContexto = useCarrito()
    console.log(valorDelContexto)

    const refEmail = useRef() 
    const refEmailV = useRef()
    const refAge = useRef()
    const [id, setId] = useState("")
    const valor=0



    
    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                name: refEmail.current.value,
                phone: refAge.current.value,
            },
            products:valorDelContexto.productos[0].id,
            total : valorDelContexto.productos[0].cantidad,
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
                console.log(error)
            })
    }
   if(valorDelContexto.productos.length)    
   {
    return (
        <div>
            {valorDelContexto.cantidad.total}
            <form onSubmit={handleSubmit}>
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
            <button onClick={valorDelContexto.vaciarCarrito} className="btn btn-warning btn-r">Vaciar Carrito</button>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
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