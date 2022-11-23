import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {collection,addDoc} from 'firebase/firestore';
import {db} from './firebase';


const Create = () => {

  const [title,setTitle] = useState('')
  const [stock,setStock] = useState(0)
  const [image,setImage] = useState('')
  const navigate = useNavigate()
  const productsCollection = collection(db,"productos")
  const store = async (e)=>{
    e.preventDefault()
    await addDoc(productsCollection,{title:title,stock:stock,image:image})
    navigate('/')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Create Product</h1>
          <form onSubmit={store}>
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
              <label className='form-label'>Imagen</label>
              <input
              value={image} 
              onChange={(e)=>setImage(e.target.value)}
              type="text"
              className='form-control'
              />
            </div>
            <button type="submit" className='btn btn-primary'>Subir</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create