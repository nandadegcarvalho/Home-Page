import React,{useState} from "react"

export default function Botao({children, initialState}) {
    const [soma, setSoma] = useState(initialState ?? 0)
    return (
        <>
            <p>{soma}</p>
            <p>
                <button
                onClick={() =>{
                    setSoma(soma + 1)
                }}
            >
                incrementa
                </button>    
            </p>
        {children}
        </>
    )
}  
