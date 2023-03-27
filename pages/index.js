import Botao from "./botao";

export default function HomePage() {

      return (
    <div className="App">
        <h1>Minha Primeira Home Page</h1>
                
        <h2>
        <Botao initialState={0}></Botao>      
        </h2>      
       <h3><a href="/Historico"> Ir para Histórico</a></h3>
       <h4><a href="/Lista"> Ir para Lista</a></h4>
    </div> 
    )
}