import './App.css'
import Comentarios from './components/Comentarios/Comentarios'
import Registro from './components/Registro/Registro'

function App() {

  return (
    <section className='section-comentarios'>
      <h1 className='h1-comentarios'>Comentarios</h1>
      <Registro />
      <Comentarios />
    </section>
  )
}

export default App
