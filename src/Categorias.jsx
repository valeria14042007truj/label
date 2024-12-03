import { useState, useEffect } from 'react';
import './App.css'
import poligono from './img/poligono.png';
import { Link } from 'react-router-dom';


function Categorias() {
  const [res, setRes] = useState(false);
  const [nivel, setNivel] = useState(false);
  const [tipo, setTipo] = useState(false);
 
  

  const toggleRes = () => {
    setRes(!res);
    setNivel(false);
    setTipo(false);
  };

  const toggleNivel = () => {
    setNivel(!nivel);
    setRes(false);
    setTipo(false);
  };

  const toggleTipo = () => {
    setTipo(!tipo);
    setRes(false);
    setNivel(false);
  };
 




  return (
    <>
     <div className="categorias">
        <a id="re" onClick={toggleRes}>
          <img src={poligono} alt="Recctricciones" />
          <p>Recctricciones</p>
        </a>
        

        <a id="nivel" onClick={toggleNivel}>
          <img src={poligono} alt="Nivel" />
          <p>Nivel</p>
        </a>
        
        <a id="tipo" onClick={toggleTipo}>
          <img src={poligono} alt="Tipo de comida" />
          <p>Tipo de comida</p>
        </a>

      </div>

      <div className={`ventana-categorias1 ${res ? '' : 'hidden'}`}>
        <div className="tex"><p>Vegana</p></div>
        <div className="tex"><p>Vegetariana</p></div>
        <div className="tex"><p>Baja en grasa</p></div>
      </div>

      <div className={`ventana-categorias2 ${nivel ? '' : 'hidden'}`}>
        <div className="tex"><Link to='/vegana'>Fácil</Link></div>
        <div className="tex"><Link to='/Intermedio'>Intermedio</Link></div>
        <div className="tex"><p>Dificil</p></div>
      </div>

      <div className={`ventana-categorias3 ${tipo ? '' : 'hidden'}`}>
      <div className="tex"><Link to='/Desayuno'>Desayuno</Link></div>
      <div className="tex"><Link to='/Merienda'>Merienda</Link></div>
        <div className="tex"><p>Cena</p></div>
      </div>
    </>
  )

}

export default Categorias;
