import React, { useState } from 'react'
const theadStyle = {fontSize: "2em", fontColor:"Red",fontWeigth:"bold", backgroundColor: "#EEE" }
const tdStyle = {borderStyle:"solid", borderColor:"black"} 
   
export default function TabelaPage() {
    return (
    <div>
    <h1>Tabela Estática dos Filmes da Marvel</h1>

<h2>Dados dos Filmes</h2>
<table>

                <thead style={theadStyle}>
                    <tr>
                        <th>Nome</th>   
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr> <td style= {tdStyle}>Homem de Ferro</td><td style= {tdStyle}>2008</td></tr>
                       <tr> <td style= {tdStyle}>Homem Aranha- Longe de Casa</td><td style= {tdStyle}>2019</td></tr>
                       <tr> <td style= {tdStyle}>Capitã Marvel</td><td style= {tdStyle}>2019</td></tr>
                       <tr> <td style= {tdStyle}>Capitão América</td><td style= {tdStyle}>2014</td></tr>
                    </tbody>
                    </table>
                    
<a href="/"> Ir para Home</a>
</div>
    )
    }

  