import axios from "axios"
import { useState, useEffect } from "react"

export default function useComentarios() {
const [comentarios, setComentarios] = useState([])

useEffect(()=> {
    axios(' https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        setComentarios(response.data)
    })
    .catch(error => console.error({error}))
})
return {
    comentarios
}

}
