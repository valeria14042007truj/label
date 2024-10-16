import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import poligono from './img/poligono.png';


function Categorias() {
  const [res, setRes] = useState(false);
  const [nivel, setNivel] = useState(false);
  const [tipo, setTipo] = useState(false);
  const navigate = useNavigate();
  

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
 
  const pasarfacil = () => {
    navigate('/Vegana');
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
        <div><p>Vegana</p></div>
        <div><p>Vegetariana</p></div>
        <div><p>Baja en grasa</p></div>
      </div>

      <div className={`ventana-categorias2 ${nivel ? '' : 'hidden'}`}>
        <div onClick={pasarfacil} ><p>Fácil</p></div>
        <div><p>Intermedio</p></div>
        <div><p>Dificil</p></div>
      </div>

      <div className={`ventana-categorias3 ${tipo ? '' : 'hidden'}`}>
        <div><p>Desayuno</p></div>
        <div><p>Merienda</p></div>
        <div><p>Cena</p></div>
      </div>
    </>
  )

}

export default Categorias;
