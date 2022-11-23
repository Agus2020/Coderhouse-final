import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Create from './Create';


const Main = () => {

    
    return (
        <main>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='Create' element={<Create/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                {/* <Route path="/verification/:code" element={<Verification/>}/> */}
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main