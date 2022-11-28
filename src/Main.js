import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito/Carrito"
import ItemListContainer from './Item/ItemListContainer';
import ItemDetailContainer from './Item/ItemDetailContainer';
import Create from './Backend/Create';
import Show from './Backend/Show';
import Edit from './Backend/Edit';


const Main = () => {

    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Create' element={<Create/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='Show' element={<Show/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main