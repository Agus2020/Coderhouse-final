import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
import {collection,addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import Select from "react-select";

const Create = () => {

  const [title,setTitle] = useState('')
  const [price,setPrice] = useState(0)
  const [stock,setStock] = useState(0)
  const [images,setImages] = useState('')
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const navigate = useNavigate()
  const productsCollection = collection(db,"productos")
  const store = async (e)=>{
    e.preventDefault()
    await addDoc(productsCollection,{title:title,stock:stock,images:images,price:price,category:category,description:description})
    navigate('/show')
  }

  const options =[
    {value: 'accion',label:'Accion'},
    {value: 'aventura',label:'Aventura'},
    {value:'zombie',label:'Zombies'}
  ]

  const onDrownChange = ({value}) =>{
    setCategory(value)
    console.log(value)
  }


  return (
    <div className='container'>
        <Link to="/show" className=''>
                  Mostrar Productos
        </Link>
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
                <label className='form-label'>Description</label>
                <input
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                type="text"
                className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input
                value={stock}
                onChange={(e)=>setStock(e.target.value)}
                type="number"
                className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                type="number"
                className='form-control'
                />
              </div>
              <div className='mb-3'>
                  <Select options={options} onChange={onDrownChange}/>
              </div>
              <div className='mb-3'>
                <label className='form-label imagen-label-r'>Imagen</label> 
                <input type="file" 
                value={images} onChange={(e)=>setImages(e.target.value)} className='form-control'/>
                
              </div>
              
              <button type="submit" className='btn btn-primary'>Subir</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Create