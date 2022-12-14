import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {collection,getDocs,deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


const Show = () => {

  const title = '';
  const stock = 0;
  const images = '';
  const price = 0;
  const [products,setProducts] = useState([])
  const productsCollection = collection(db,"productos")
  const getProducts = async () =>{
    const data = await getDocs(productsCollection)
    setProducts(
      data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
  
  }

  const deleteProduct = async (id) =>{
    const productDoc = doc(db,"productos",id)
    await deleteDoc(productDoc)
    getProducts()
  }
  const Submit = () =>{
    if(stock>0&&title&&images&&price)
    {
       return(
         <button type="submit" className='btn btn-primary'>Subir</button> 
       )
    }
}

const confirmDelete = (id) =>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(id)
      Swal.fire(   
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}

useEffect (()=>{
  getProducts()
},[])


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-secondary mt-2 mb-2'>
                  Añadir productos
                </Link>
                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>images</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>//</th>
                      <th>//</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product)=>{
                      return(
                        <tr key={product.id}>
                          <td><img src={product.images} className="img-table"/></td>
                          <td>{product.title}</td>
                          <td>{product.description}</td>
                          <td>{product.category}</td>
                          <td>{product.stock}</td>
                          <td>{product.price}</td>
                          <td>
                          <Link to={`/edit/${product.id}`} className='btn btn-light'>Editar</Link>
                          </td>
                          <td>
                            <button onClick={()=>{confirmDelete(product.id)}} className='btn btn-danger'>Borrar</button>
                         </td>
                      </tr>
                      )
                      
                    })}
                  </tbody>
                </table>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show