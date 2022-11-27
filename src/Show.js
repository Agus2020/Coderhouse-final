import React,{useState,useEffect} from 'react'

import { Link } from 'react-router-dom';

import {collection,getDocs,getDoc,deleteDoc, doc} from 'firebase/firestore';
import { db } from './firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


const Show = () => {

    const [products,setProducts] = useState([])
    const productsCollection = collection(db,"products")
    const getProducts = async () =>{
      const data = await getDocs(productsCollection)
      console.log(data.docs)
      setProducts(
        data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      )
    
    }

    const deleteProduct = async (id) =>{
      const productDoc = doc(db,"products",id)
      await deleteDoc(productDoc)
      getProducts()
    }


    console.log(products)

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
                  
                </Link>
                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Stock</th>
                      <th>Acciones</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product)=>{
                      return(
                        <tr>
                        <td><img src={product.images} className="img-table"/></td>
                        <td>{product.title}</td>
                        <td>{product.stock}</td>
                        <td>
                        <Link to={`/edit/${product.id}`} className='btn btn-light'>Editar</Link>
                        </td>
                        <td>
                          <button onClick={()=>{deleteProduct(product.id)}} className='btn btn-danger'>Borrar</button>
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