import {useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../Carrito/CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {

    const navigate = useNavigate();

    const { agregarProducto } = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)
    

    const handleOnAdd = (cantidad) => {
        setCantidad(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(producto,cantidad)
        alert("Productos agregados al carrito")
        navigate("/")
        }


    return (
        <div className="card card-r" >
            <h2>${producto.price}</h2>
            <img src={producto.images} alt={producto.title} className="card-img-top card-img-r" />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <h5 className="card-description">Cantidad disponible:{producto.stock}</h5>
                <ItemCount init={cantidad} handleOnAdd={handleOnAdd}  stock={producto.stock}/>
                    {confirmado && <button onClick={handleClick} >agregar al carrito</button>}
            </div>
            
           
        </div>
                    
    )
}
export default ItemDetail