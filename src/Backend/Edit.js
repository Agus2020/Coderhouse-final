import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {getDoc,updateDoc,doc} from 'firebase/firestore';
import {db} from '../firebase';
import { Link } from 'react-router-dom';
import Select from "react-select";

const Edit = () => {
  const [title,setTitle] = useState('')
  const [stock,setStock] = useState(1)
  const [images,setImages] = useState('')
  const [price,setPrice] = useState(1)
  const [category,setCategory] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const update = async (e) =>{
    e.preventDefault()
    const product = doc(db,"productos",id)
    const data = {title:title, stock: stock,images:images,price:price,category:category}
    await updateDoc(product,data)
    navigate('/')
  }


  const options =[
    {value: 'accion',label:'Accion'},
    {value: 'aventura',label:'Aventura'},
    {value:'zombie',label:'Zombies'}
  ]

  const onDrownChange = ({value}) =>{
    setCategory(value)
  }




  const getproductById = async (id) =>{
    const product = await getDoc(doc(db,"productos",id))
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
    if(stock>0&&title&&images&&price>0&&category)
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
      <Link to="/show" className=''>
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
            onChange={(e)=>setPrice(e.target.value)}
            type="text"
            className='form-control'
            />
          </div>
          <div className='mb-3'>
          <Select options={options} onChange={onDrownChange}/>
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