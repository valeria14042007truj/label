import { useState } from 'react'
import './App.css'
import arroz from './img/arroz.png';
import papa from './img/papa.png';



function Blog() {
   
 
  return (
    <>
      <div className="blog">
        <div className="item1">
          <img src={papa} alt="Beneficios del arroz" />
          <div className="texto">
            <p className="titulo titi">Alternativas saludables a ingredientes comunes</p>
            <p className="des">Alternativas saludables a ingredientes comunes para una dieta más nutritiva.



</p>
          </div>
        </div>

        <div className="item1">
          <img src={arroz} alt="Beneficios de la papa" />
          <div className="texto">
            <p className="titulo titi">Nutrición para el bienestar emocional</p>
            <p className="des">Nutrición saludable para promover tu bienestar emocional.</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Blog;
