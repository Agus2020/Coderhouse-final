import {useState } from "react"
import { useCarrito } from "../Carrito/CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)
    

    const handleOnAdd = (cantidad) => {
        setCantidad(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(producto,cantidad)
        }


    return (
        <div className="card card-r" >
            <h2>${producto.price}</h2>
            <img src={producto.images} alt={producto.title} className="card-img-top card-img-r" />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <ItemCount init={cantidad} handleOnAdd={handleOnAdd}  />
                    {confirmado && <button onClick={handleClick} >agregar al carrito</button>}
            </div>
            
           
        </div>
                    
    )
}
export default ItemDetail