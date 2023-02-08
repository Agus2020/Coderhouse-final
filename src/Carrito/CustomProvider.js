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

    const agregarItem = (item) => {
        const inCart = carrito.find(prod => prod.id === item.id)
        if(inCart){
            setCarrito(carrito.map((element)=>{
                if(element.id === inCart.id){
                    setTotal(total + element.price * 1)
                    setCantidadTotal(cantidadTotal + 1)
                    return {...inCart, cantidad: inCart.cantidad + 1}
                    
                }
                else{
                    return {...element}
                }
            }))

        }
        else{
            return item;
        }

        
}

const borrarItem = (item) => {
    const inCart = carrito.find(prod => prod.id === item.id)
    if(inCart){
        setCarrito(carrito.map((element)=>{
            if(element.id === inCart.id){
                setTotal(total - element.price * 1)
                setCantidadTotal(cantidadTotal - 1)
                return {...inCart, cantidad: inCart.cantidad - 1}

                
            }
            else{
                return {...element}
            }
        }))

    }
    else{
        return item;
    }

    
}


    const context = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarItem:borrarItem,
        agregarItem:agregarItem,
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}


export default CustomProvider
