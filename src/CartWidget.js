import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)

    return (
        <Link to="/carrito">
            <div className="material-icons">shopping_cart</div>
            <span>{valorDelContexto.cantidadTotal}</span>
        </Link>
    )
}

export default CartWidget