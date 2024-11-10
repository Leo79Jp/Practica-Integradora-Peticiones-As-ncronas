import { useState } from "react"


export default function useRegistro(inicioValue = '') {
    const [value, setValue] = useState(inicioValue)
    
    const onChange =(e)=>{
        setValue(e.target.value)
    }
    const reset = () =>{
        setValue(inicioValue)
    }
  return {value, onChange, reset}
}
