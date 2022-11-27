import { Link } from "react-router-dom"


const Item = ({ title, image, price, id }) => {
    return (
        <div className="card card-r" >
            <h2>${price}</h2>
            <img src={image} alt={title} className="card-img-top card-img-r" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button className="card__button">
                <Link to={"/item/" + id} >
                    Ver Detalle
                </Link>
            </button>
            </div>
            
           
        </div>
        
    )
}
export default Item