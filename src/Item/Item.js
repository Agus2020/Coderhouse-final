import { Link } from "react-router-dom"


const Item = ({ title, images, price, id,stock }) => {
    return (
        <div className="card card-r" >
            
            <img src={images} alt={title} className="card-img-top card-img-r" />
            <h2>US${price}</h2>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5>Cantidad:{stock}</h5>
                <button className="btn btn-primary">
                    
                <Link to={"/item/" + id} className="text-light">
                    Ver Detalle
                </Link>
            </button>
            </div>
            
           
        </div>
        
    )
}
export default Item