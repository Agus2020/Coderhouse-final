import { useContext, useState } from "react"
import { contexto, useCarrito } from "./CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {

    //const {agregarProducto} = useContext(contexto)
    const { agregarProducto } = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)


    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
        setCantidad(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(producto,cantidad)
    }


    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div className="detail-flex">
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
                    {confirmado && <button onClick={handleClick}>agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}
export default ItemDetail