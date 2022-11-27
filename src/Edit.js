import React,{useState,useEffect} from 'react';
import {Navigate, useNavigate,useParams} from 'react-router-dom';
import {getDoc,updateDoc,doc} from 'firebase/firestore';
import {db} from './firebase';
import { Link } from 'react-router-dom';

const Edit = () => {
  const [title,setTitle] = useState('')
  const [stock,setStock] = useState(1)
  const [images,setImages] = useState('')
  const [price,setPrice] = useState(1)
  const navigate = useNavigate()
  const {id} = useParams()
  const update = async (e) =>{
    e.preventDefault()
    const product = doc(db,"products",id)
    const data = {title:title, stock: stock,images:images,price:price}
    await updateDoc(product,data)
    navigate('/')
  }

  const getproductById = async (id) =>{
    const product = await getDoc(doc(db,"products",id))
    if(product.exists()){
      setTitle(product.data().title)
      setStock(product.data().stock)
      setImages(product.data().images)
      setPrice(product.data().price)
    }
    else{
      
    }
  }

  const Submit = () =>{
    if(stock>0&&title&&images&&price>0)
    {
       return(
         <button type="submit" className='btn btn-primary'>Subir</button> 
       )
    }
}

  useEffect(()=>{
    getproductById(id)
  },[])
  return (
    <div className='container'>
    <div className='row'>
      <div className='col'>
      <Link to="/" className=''>
                Mostrar Productos
      </Link>
        <h1>Create Product</h1>
        <form onSubmit={update}>
          <div className='mb-3'>
            <label className='form-label'>Title</label>
            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            className='form-control'
            />       
          </div>
          <div className='mb-3'>
            <label className='form-label'>Stock</label>
            <input
            value={stock}
            onChange={(e)=>setStock(e.target.value)}
            type="text"
            className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Precio</label>
            <input
            value={price} 
            onChange={(e)=>setImages(e.target.value)}
            type="text"
            className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Imagen</label>
            <input
            value={images} 
            onChange={(e)=>setImages(e.target.value)}
            type="text"
            className='form-control'
            />
          </div>
          {Submit()}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Edit