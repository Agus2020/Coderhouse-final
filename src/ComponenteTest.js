import { useEffect } from "react"

const ComponenteTest = () => {

    //1) Estado inicial
    const [state, setState] = useState()

    //2) Efecto secundario
    /* 
    Casos de uso de un efecto : 
    - Pedir datos a una API
    - Suscribirse a un evento
    */
    useEffect(() => {
        const callback = (e)=>{
            if(e.target.id=="modal"){
                setState(false)
            }
        }

        document.addEventListener("click",callback)
        
        return () => {
            document.removeEventListener("click",callback)
        }
    }, [])


    return (
        <div>ComponenteTest</div>
    )
}

export default ComponenteTest

//react-query
/* 
const {isCarganding,isError,resultado,error} = useElHook(elpedidoDeFetch)

if(isCarganding){
    return <div>Cargando</div>
}

if(isError){
    return <div>Error</div>
} */

//use()

//Next13


/* const Componente = async () => {

    const pedido = await fetch()
    const resultado = await pedido.json()



    if(resultado){
        return <div>Componente</div>
    }


    return (
        <div>
        </div>
    )
} */