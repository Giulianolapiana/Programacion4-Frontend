import { useState } from 'react';

export const ComponenteUseState = () => { 

  const [contador,setContador] =useState<number>(0)
  
  const sumar =()=>{
    console.log("Estoy en la funcion sumar")
    //setContador(contador+1) funcional pero no recomendada
    setContador((prev)=>prev+1)
}

const restar =()=>{
    console.log("Estoy en la funcion restar")
    setContador((prev)=>prev-1)
}

const valorInicial = (valorIniciar:number)=>{
    console.log("Estoy en la funcion valorInicial")
    setContador(valorIniciar)
  }


  return (
    <div>
        <h2>Use State</h2>
        <hr/>
        <button onClick={sumar}>+1</button><br/>
        <span>{contador}</span><br/>
        <button onClick={restar}>-1</button>
        <hr/>
        <button onClick={()=> valorInicial(10)}>Valor inicial 10</button>
    </div>
  )
}
