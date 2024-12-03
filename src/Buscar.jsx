import { useState } from 'react'
import './App.css'




function Buscar({ setBusqueda }) {
  const [estado, setEstado] = useState ({
    busqueda: ''
  });

  const buscar = (e) => {
    const valor = e.target.value
    setEstado({
      ...estado,
      busqueda: e.target.value
    })
    setBusqueda(valor);
  }
    
  
  return (
    
    <div className="buscar">
    <input type="text" className="bus" placeholder="Buscar" value={estado.busqueda} onChange={buscar} />
    </div>
    
    
  )
}

export default Buscar;
