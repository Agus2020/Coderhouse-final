import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}




const CustomProvider = ({ children }) => {
    const [estado,setEstado] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

    const borrarItem = (producto,cantidad,cantidadTotal) => {
        
        
    }

    const agregarProducto = (producto, cantidad) => {
        const inCart = carrito.find(prod => prod.id === producto.id)
        if (inCart){
            setCarrito(carrito.map((element) => {
                if(element.id === inCart.id) {
                    return {...inCart, cantidad: inCart.cantidad + cantidad}
                }
                else return element
            }))
        }
        else{
            setCarrito([...carrito, {...producto,cantidad}])

        } 
        setTotal(total + producto.price * cantidad)
        setCantidadTotal(cantidadTotal + cantidad)
    
    }

    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarItem:borrarItem,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider
