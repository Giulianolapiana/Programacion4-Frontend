import { useState, type ChangeEvent } from "react"

interface IInitialData{
    name:string
}

const initialData = [
    {
        name:"Juan"
    },
    {
        name:"Pedro"
    }
    ,
    {
        name:"Maria"
    },
    {
        name:"Camila"
    }
]


export const ArrayUseState = () => {
  const [arrayStudents,setArrayStudents] = useState<IInitialData[]>(initialData)

  const [valueInput, setValueInput] = useState<string>('')

  const addStudent = ()=>{
    // arrayStudents.push({name: "Martin"}) esta mal no se actualiza la vista
    setArrayStudents((prev)=> [...prev,{name:`${valueInput}`}])
    setValueInput('')
  }

  const handleChangeInput = (event:ChangeEvent<HTMLInputElement> )=>{
    console.log("cambio el input")
    const value = event.target.value
    setValueInput(value)
  }

  return (
    <div>
        <h2>Listado estudiantes</h2>
        <hr/>
        
        <ul>
            {
            arrayStudents.map((el, index)=>(
                <li key={index}>{index+1} - {el.name}</li>
            ))
        }

        </ul>
        
        <hr/>
        
        <input
        onChange={
            (e)=>{handleChangeInput(e)}
        }
        type="string"
        value={valueInput}
        placeholder="Ingrese un alumno"
        autoComplete="off"
        name="nameStudent"
        />
        
        <button onClick={addStudent}>Ingresar otro alumno</button>
    </div>
  )
}
