import { useState } from "react";
import './estilos.css'
const ItemCount = ({handleOnAdd,init,stock}) => {
    const [count, setCount] = useState(init);
    const [estado,setEstado] = useState(0);
    const handleSumar = (e) => {
        e.stopPropagation()
        if(count<stock)
        {
            setCount(count + 1);
        } 
    }

    const handleRestar = (e) => {
        e.stopPropagation()
        if(count>1)
        {
            setCount(count - 1);
        }
    }

    const handleChange = (e) => {
        const codigo = e.key.charCodeAt()
        if (codigo > 96 && codigo < 123) {
        }else{
            e.preventDefault()
        }
    }


    const handleConfirmar = () => { 
        handleOnAdd(count)
        setEstado(1)
    }

    const handleDivClick = (e) => {
    }

    return (
        <div  onClick={handleDivClick}>
            <div className="counter-actions">
                {estado ? 
                    null
                : 

                <div className="button">
                    <p>{count}</p>
                        <button onClick={handleRestar} className="btn btn-light" disabled={estado}>-</button>
                        
                        <button onClick={handleSumar} className="btn btn-light" disabled={estado}>+</button>
                        
                        <button onClick={handleConfirmar} className="btn btn-primary">confirmar</button>
                </div>
                
            
            }
                
            </div>
            
        </div>
    )
   

}

export default ItemCount