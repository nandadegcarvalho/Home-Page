import { removeListener } from 'process'
import React, { useState } from 'react'
const theadStyle = {fontSize: "2em", fontColor:"Red",fontWeigth:"bold", backgroundColor: "#EEE" }
const tdStyle = {borderStyle:"solid", borderColor:"black"} 
  
export default function TabelaPage() {
    const [filmes, setFilmes] = useState([{nome:"Homem de Ferro",dataDeLancamento:"2016"}])
    const [nome, setName] = useState ("")
    const [data, setDate] = useState  ("")
    const [filmeNovo,setFilmeNovo] = useState ({nome:"", dataDeLancamento:""})
    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateDate = (event) => {
        setDate(event.target.value)
    };
    const adicionaFilme=() => {
        // setFilmes(prev=>([...prev,filmeNovo]))
        setFilmes([...filmes,{nome:nome,dataDeLancamento:data}])
        setName("")
        setDate("")
    }
    const removeFilme=(index) => {
        let novoVetor = [...filmes]
        setFilmes(novoVetor)
        novoVetor.setAttribute("onClick","index.removeFilme()");
    }
    return (
    <div>
    <h1>Tabela dos Filmes da Marvel</h1>
    
    <h2>Dados dos Filmes</h2>
    <input type="text" placeholder = "Digite um nome" onChange={updateName} value={nome}/>
    <input type="number" placeholder = "Digite uma data" onChange={updateDate} value={data}/>
    <button onClick={adicionaFilme}>Adiciona</button>
<table>

                <thead style={theadStyle}>
                    <tr>
                        <th>Nome</th>   
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                        {filmes.map((filme,index)=> 
                        <tr key={index}><td style= {tdStyle}>{filme.nome}</td><td style= {tdStyle}>{filme.dataDeLancamento}</td><td style= {tdStyle}><button onClick={()=>removeFilme(index)}>Deletar</button></td></tr>
                        )}
                       </tbody>
                    </table>
                    
<a href="/"> Ir para Home</a>
</div>
    )
    }

  