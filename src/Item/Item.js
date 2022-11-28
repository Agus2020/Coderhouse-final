import { Link } from "react-router-dom"


const Item = ({ title, images, price, id }) => {
    return (
        <div className="card card-r" >
            <h2>US${price}</h2>
            <img src={images} alt={title} className="card-img-top card-img-r" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
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