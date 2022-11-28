import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

    const borrarItem = (id) => {
    }

    const agregarProducto = (producto, cantidad) => {
        if (isInCart.inCart) {
            
        } else {
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.price * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    
    }

    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider