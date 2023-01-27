import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"
import './estilos.css';
const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const productosCollection = collection(db, "productos")
        const refe = doc(productosCollection,id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setItem(res.data())
        })
        .catch(error=>{
        })
    },[])

    return (
        <div className="card card-rDetail" >
            <ItemDetail producto={{id,...item}}/>
        </div>
        
    )
}


export default ItemDetailContainer