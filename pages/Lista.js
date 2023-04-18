import React, { useState } from 'react'
export default function ListaPage() {
    const [filmes, setFilmes] = useState([{nome:"Homem de Ferro",dataDeLancamento:"2016"}])
    const [nome, setName] = useState ("")
    const [data, setDate] = useState  ("")
    const [filmeNovo,setFilmeNovo] = useState ({nome:"", dataDeLancamento:""})
    const updateName = (event) => {
    setName (event.target.value)
    };
    const updateDate = (event) => {
        setDate(event.target.value);
    };
    const adicionaFilme=() => {
        // setFilmes(prev=>([...prev,filmeNovo]))
        setFilmes([...filmes,{nome:nome,dataDeLancamento:data}])
        setName("")
        setDate("")
    }
        return (
        <div>
            <h1>Lista de Filmes da Marvel</h1>
            <input type="text" placeholder = "Digite um nome" onChange={updateName} value={nome}/>
            <input type="number" placeholder = "Digite uma data" onChange={updateDate} value={data}/>
            <button onClick={adicionaFilme}>Adiciona</button>
            <ul>{ filmes.map ((filme) =>
            <li>{filme.nome}-{filme.dataDeLancamento}</li>
            )}</ul>
            <a href="/"> Ir para Home</a>
        </div>
    )
}