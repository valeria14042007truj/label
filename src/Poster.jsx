import { useState } from 'react'
import './App.css'
import poster from './img/poster.png';
import { Link } from 'react-router-dom';




function Poster() {
    
  
  return (
    <>
    <Link to={'/Asesorias'}>
    <img className="poster" src={poster} alt="Ir a la comunidad" />
     </Link>
    </>
  )
}

export default Poster;
