import { useState } from 'react'
import './App.css'
import arroz from './img/arroz.png';
import papa from './img/papa.png';



function Blog() {
   
 
  return (
    <>
      <div className="blog">
        <div className="item1">
          <img src={arroz} alt="Beneficios del arroz" />
          <div className="texto">
            <p className="titulo">Porque incluir arroz</p>
            <p className="des">El consumo de arroz tiene sus beneficios...</p>
          </div>
        </div>

        <div className="item1">
          <img src={papa} alt="Beneficios de la papa" />
          <div className="texto">
            <p className="titulo">Beneficios de comer papa todos los días</p>
            <p className="des">La papa tiene muchos carbohidratos que tienen beneficios para la salud</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Blog;
