import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "./firebase"

const Carrito = () => {

    const valorDelContexto = useCarrito()
    console.log(valorDelContexto.productos)
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
            products:valorDelContexto[0],
            total : "prod",
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection,orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }

    const vaciarCarritos = () => {
        valorDelContexto = null
    }
   if(valorDelContexto.productos.length)    
   {
    return (
        <div>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >guardar</button>
            </form>
            <button onClick={vaciarCarritos}>Vaciar</button>
        </div>
    )
   }
   else
   {
        return(
            <div>
                <p>El carrito se encuentra vacio</p>
            </div>
        )
   }
    
}

export default Carrito