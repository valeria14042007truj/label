
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vegana from './vegana.jsx'
import Intermedio from './Intermedio.jsx'
import Desayuno from './Desayuno.jsx'
import Merienda from './Merienda.jsx'
import Principal from './Principal.jsx'
import InfoRecetas from './InfoRecetas.jsx'
import Asesorias from './Asesorias.jsx'
import Login from './login.jsx'
import Registrar from './Registrar.jsx'
import Chat from './Chat.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registrarse' element={<Registrar/>}></Route>
     
      <Route path='/' element={<Principal />}>
        <Route index element={<App />}></Route>
        <Route path=':id' element={<InfoRecetas />}></Route>
        <Route path='/vegana' element={<Vegana />}></Route>
        <Route path='/Intermedio' element={<Intermedio />}></Route>
        <Route path='/Desayuno' element={<Desayuno />}></Route>
        <Route path='/Merienda' element={<Merienda />}></Route>
        <Route path='/Asesorias' element={<Asesorias />}></Route>

      </Route>

      <Route path='/chat' element={<Chat/>}></Route>

    
      
    </Routes>
  </BrowserRouter>
)
