import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito/Carrito"
import ItemListContainer from './Item/ItemListContainer';
import ItemDetailContainer from './Item/ItemDetailContainer';
import Show from './Backend/Show';
import Edit from './Backend/Edit';
import Error404 from './Error';

const Main = () => {

    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='Show' element={<Show/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<Error404/>}/>

            </Routes>
        </main>
    )
}

export default Main