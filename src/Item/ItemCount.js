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
                    <h4>{count}</h4>
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