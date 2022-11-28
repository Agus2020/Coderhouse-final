import { useState } from "react";

const ItemCount = ({handleOnAdd,init}) => {

    const [count, setCount] = useState(init);

    
    const handleSumar = (e) => {
        e.stopPropagation()
        setCount(count + 1);
    }

    const handleRestar = (e) => {
        setCount(count - 1);
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
    }

    const handleDivClick = (e) => {
    }

    return (
        <div  onClick={handleDivClick}>
            <div className="counter-actions">
                <button onClick={handleSumar} className="btn btn-primary">+</button>
                <p>{count}</p>
                <button onClick={handleRestar} className="btn btn-warning">-</button>
            </div>
            <button onClick={handleConfirmar}>confirmar</button>
        </div>
    )

}

export default ItemCount