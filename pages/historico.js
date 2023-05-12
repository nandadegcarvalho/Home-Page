import React, { useState } from 'react'
import { FetchEventResult } from 'next/dist/server/web/types'
export default function HistoricoPage() {
    const [dados]
     function dadosGit() {
        // const resultadoConvertido = await
        // fetch('https://reqres.in/api/users')  
        // let users= await resultadoConvertido.json()
        // console.log(users)
        fetch('https://reqres.in/api/users').then(response=>response.json()).then(users=>console.log(users))
    }
    return (
        <div>
            <h1>Meu histórico de Projetos</h1>
        <h2>
        <button onClick={dadosGit}>Visualizar gitHib</button>
        </h2>

            <a href="/"> Ir para Home</a>
        </div>  
    )
}
