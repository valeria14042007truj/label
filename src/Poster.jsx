import { useState } from 'react'
import './App.css'
import poster from './img/poster.png';




function Poster() {
    
  
  return (
    
    <a href="comunidad.html">
    <img className="poster" src={poster} alt="Ir a la comunidad" />
    </a>
    
  )
}

export default Poster;
