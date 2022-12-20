import { Link } from "react-router-dom"


const Item = ({ title, images, price, id,stock }) => {
    return (
        <div className="card card-r" >
            
            <img src={images} alt={title} className="card-img-top card-img-r" />

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <h5 className="card-title">{title}</h5>
                </li>
                <li className="list-group-item">
                <h2>US${price}</h2>
                
                </li>
                <li className="list-group-item">
                    <h5>Cantidad:{stock}</h5>
                </li>
            </ul>

            
            <div className="card-body">

                
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