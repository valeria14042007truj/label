import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Rs from './Rs'
import Categorias from './Categorias'
import Buscar from './Buscar'
import Recetas from './Recetas'
import Poster from './Poster'
import Blog from './Blog'
import Vegana from './vegana'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Rs />
       <Categorias />
       <Buscar />
       <Recetas />
       <Poster />
       <Blog />
       
    </>
  )
}

export default App;
