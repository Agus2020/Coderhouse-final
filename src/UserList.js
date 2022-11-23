import React from 'react';
import User from './User';

const UserList = ({ usuarios }) => {

    //const res = usuarios.forEach((usuario,indice)=>{ return ;}) //sentencia pero no expresion

    /* const res = usuarios.map((usuario,indice)=>{
        return <li>{usuario.nombre}</li>
    })  *///[undefined,undefined,undefined]

    return (
        <section>
            {usuarios.map((usuario) => {
                return (
                    <User key={usuario.id} usuario={usuario}/>
                )
            })}
        </section>
    )
}

export default UserList