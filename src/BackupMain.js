import React, { useEffect, useState } from 'react'
import ContadorContainer from './ContadorContainer'
import UserContainer from './UserContainer'

const Main = () => {

    const [phrase,setPhrase] = useState("Cargando...")

    useEffect(()=>{
        getPhrase()
    },[])

    const getPhrase = () => {
        const pedido = fetch("https://ricardofort.herokuapp.com/")
        pedido
        .then((respuesta)=>{
            return respuesta.json()
        })
        .then(({frase})=>{
            setPhrase(frase)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <main>
            <h2>Home</h2>
            <ContadorContainer/>
            <UserContainer/>
            <button onClick={getPhrase}>get comandante's phrase</button>
            <p>{phrase}</p>
        </main>
    )
}

export default Main