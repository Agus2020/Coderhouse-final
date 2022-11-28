import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)

    return (
        <Link to="/carrito">
            <div className="text-black">Carrito de compras {valorDelContexto.cantidadTotal}</div>
        </Link>
    )
}

export default CartWidget