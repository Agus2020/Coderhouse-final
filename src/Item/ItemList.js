import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="card-itemList" >
            {
                items.map((item)=>{
                    return <Item key={item.id} {...item}/>
                })
            }
        </div>
    )
    
}

export default ItemList