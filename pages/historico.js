import React, { useState } from 'react'
const theadStyle = {fontSize: "2em", fontColor:"Red",fontWeigth:"bold", backgroundColor: "#EEE" }
const tdStyle = {borderStyle:"solid", borderColor:"black"} 
import { FetchEventResult } from 'next/dist/server/web/types'
export default function HistoricoPage() {
    const [dados, setDados] = useState([])
    const [name, setName] = useState("")
    const [profession, setProfession] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")
    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateProfession = (event) => {
        setProfession(event.target.value);
    };
    const updateAge = (event) => {
        setAge(event.target.value);
    };
    const updateId = (event) => {
        setId(event.target.value);
    };
      
     
     async function dadosApi() {
         const resultadoConvertido = await
         fetch('https://646763e02ea3cae8dc2d5cf8.mockapi.io/user')  
         let users= await resultadoConvertido.json()
         console.log(users)
         setDados (users)
        //fetch('https://reqres.in/api/users').then(response=>response.json()).then(users=>console.log(users))
    }
    async function postJSON() {
        try {
          const response = await fetch('https://646763e02ea3cae8dc2d5cf8.mockapi.io/user',{
             method:'POST',
             headers: {
                "Content-Type": "application/json",
              },
             body: JSON.stringify({name:name,profession:profession,age:age,id:id})
            });
        const result = await response.json();
    console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
      }
    }
    fetch('https://646763e02ea3cae8dc2d5cf8.mockapi.io/user/', {
    method: 'DELETE',
})
   .then(res => res.text()) // ou res.json()
   .then(res => console.log(res))
        
    return (
        <div>
            <h1>Meu histórico de Projetos</h1>
        <h2>
        <input type="text" placeholder="Nome" onChange={updateName} value={name} />
        <input type="text" placeholder="Profissão" onChange={updateProfession} value={profession} />
        <input type="text" placeholder="Idade" onChange={updateAge} value={age} />
        <input type="text" placeholder="Id" onChange={updateId} value={id} /> 
        <button onClick={postJSON}>Visualizar Dados</button>
        
        </h2>
        <h3><button onClick={dadosApi}>Visualizar Dados</button></h3>
        <table>
        <thead style={theadStyle}>
            <tr>
            <th>name</th>
            <th>avatar</th>
            <th>profession</th>
            <th>age</th>
            <th>id</th>
            </tr>
            </thead>
        <tbody>
             {
             dados?.map((dado,index) => <tr key={index}>
                <td style={tdStyle}>{dado.name}</td>
                <td style={tdStyle}><img src={dado.avatar}></img></td>
                <td style={tdStyle}>{dado.profession}</td>
                <td style={tdStyle}>{dado.age}</td>
                <td style={tdStyle}>{id}</td>
                
             </tr>)}
            </tbody>
        </table>

            <a href="/"> Ir para Home</a>
        </div>  
    )
}
