
import React, { useEffect, useMemo, useState } from 'react'
const theadStyle = {fontSize: "2em", fontColor:"Red",fontWeigth:"bold", backgroundColor: "#EEE" }
const tdStyle = {borderStyle:"solid", borderColor:"black"} 
  
export default function TabelaPage() {
    const [filmes, setFilmes] = useState([{nome:"Homem de Ferro",dataDeLancamento:"2016"}])
    const [nome, setName] = useState ("")
    const [data, setDate] = useState  ("")
    const [filtro, setFilter] = useState  ("")
    const [filmeNovo,setFilmeNovo] = useState ({nome:"", dataDeLancamento:""})
    const [editando, setEditando] = useState (false)
    const [indiceEdicao, setIndiceEdicao] = useState (-1)
    const handleOrderClick = () => {}
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
        novoVetor.splice(index,1)
        setFilmes(novoVetor)
    }
    const escolheFilme=(index) => {
        setEditando(true)
        setIndiceEdicao(index)
        let filmeEdita = [...filmes]
        let filmeEdicao = filmeEdita[index]
        setName(filmeEdicao.nome)
        setDate(filmeEdicao.dataDeLancamento)
    }
    const editaFilme=() => {
        let filmeEdita = [...filmes]
        filmeEdita[indiceEdicao].nome = nome
        filmeEdita[indiceEdicao].dataDeLancamento = data
        setFilmes (filmeEdita)
        setEditando (false)
        setName ("")
        setDate ("")
    }
    const ordenaFilme = () => {
        let copiaFilmes = [...filmes]
        copiaFilmes.sort((a,b) => a.nome.localeCompare(b.nome))
        setFilmes (copiaFilmes)
    }
    const ordeneFilme = () => {
        let copiasFilmes = [...filmes]
        copiasFilmes.sort((b,a) => a.nome.localeCompare(b.nome))
        setFilmes (copiasFilmes)
    }
   const filmesFiltrados = useMemo(()=>
        filmes.filter(filter => filter.nome.includes(filtro))
   ,[filmes,filtro])
             
   useEffect(() => {
     if (editando) {
        alert ("Você está editando " + nome + " do ano " + data)
     }
    },[editando]
   )
    return (
    <><div>
            <h1>Tabela dos Filmes da Marvel</h1>

            <h2>Dados dos Filmes</h2>

            <input type="text" placeholder="Digite um nome" onChange={updateName} value={nome} />
            <input type="number" placeholder="Digite uma data" onChange={updateDate} value={data} />
            {!editando ? <button onClick={adicionaFilme}>Adiciona</button> :
                <button onClick={editaFilme}>Edita</button>}
                <h3>
                <input type="text" placeholder="Qual filme você procura?" onChange={(e) =>setFilter(e.target.value)} value={filtro} />
                
                </h3>
        </div><div>
                <div>
                    <table>

                        <thead style={theadStyle}>
                            <tr>
                                <th>Nome</th>
                                <th>Data</th>
                                <th>Ações</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filmesFiltrados.map((filme, index) => <tr key={index}><td style={tdStyle}>{filme.nome}</td><td style={tdStyle}>{filme.dataDeLancamento}</td>
                                <td style={tdStyle}><button onClick={() => removeFilme(index)}>Deletar</button></td>
                                <td style={tdStyle}><button onClick={() => escolheFilme(index)}>Editar</button></td>
                            </tr>

                            )}
                        </tbody>
                        <tfoot><tr style={tdStyle}><button onClick={() => ordenaFilme()}>Ordenar Filmes de A-Z</button></tr>
                        <tr style={tdStyle}><button onClick={() => ordeneFilme()}>Ordenar Filmes de Z-A</button></tr></tfoot>

                    </table>
                </div>
                <a href="/"> Ir para Home</a>
            </div></>

)
    }


  