import { useState } from 'react'
import './App.css'
import Rs from './Rs'
import Categorias from './Categorias'
import Buscar from './Buscar'
import Recetas from './Recetas'
import Poster from './Poster'
import Blog from './Blog'
import Vegana from './vegana'

function App() {
  const [busqueda, setBusqueda] = useState('');
  



  return (
    
    <>
     
      <Rs />
      <Categorias />
      <Buscar setBusqueda={setBusqueda} /> {/* Pasa la función setBusqueda */}
      <Recetas busqueda={busqueda} />
      <Poster />
      <Blog />
      

      
    </>
  
  )
}

export default App;
