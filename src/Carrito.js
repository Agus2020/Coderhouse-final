import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "./firebase"

const Carrito = () => {
    const valorDelContexto = useCarrito()
    console.log(valorDelContexto)
    const refName = useRef() 
    const refAge = useRef()
    const [id, setId] = useState("")
    const valor=0
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                name: refName.current.value,
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
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >guardar</button>
            </form>
            <button onClick={valorDelContexto.vaciarCarrito}>Vaciar</button>
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