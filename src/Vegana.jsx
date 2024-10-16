import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'
import Header from './Header'
import iconon from './img/iconon.png';
import Categorias from './Categorias'
import Buscar from './Buscar'
import flechabtn from './img/flechabtn.png';
import corazonbtnfalse from './img/corazonbtnfalse.png';
import corazonbtntrue from './img/corazonbtntrue.png';
import Poster from './Poster'
import Blog from './Blog'




function Vegana() {

    const [recetas, setRecetas] = useState([]);
    const [likess, setLikess] = useState({});

    useEffect(() => {
        
        const fetchRecetas = async () => {
            try {
                const response = await fetch('http://localhost:5000/recetas-veganas');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRecetas(data);
            } catch (error) {
                console.error('Error fetching recetas:', error.message);
            }
        };
    
        fetchRecetas();
    }, []);

    const toggleLike = (id) => {
        setLikess((prevLikess) => ({
            ...prevLikess,
            [id]: !prevLikess[id], // Cambia el estado de "me gusta" para la receta correspondiente
        }));
    };
    
  
  

  return (
    <>
     <Header />
     <Categorias />
     <Buscar />
      {/* Mostrar las recetas */}
      <section className="recetas">
        <div className="grid">
          {recetas.map((receta) => (
            <div className="item" key={receta.recetaid}> {/* Asegúrate de que 'id' exista en tu tabla */}
              <img className="imgreceta" src={receta.imagen} alt={receta.nombre} />
              <div className="titulo">
                <p>{receta.nombre}</p>
              </div>
              <div className="niveln">
                <img src={iconon} alt="Dificultad" />
                <p>{receta.nivel}</p> {/* Asegúrate de que 'nivel' exista en tu tabla */}
              </div>
              <div className="botonlike">
                <div className="boton">
                  <img src={flechabtn} alt="Ver más" />
                  <p>Ver más</p>
                </div>
                <div className="corazon" onClick={() => toggleLike(receta.recetaid)}>
                        <img src={likess[receta.recetaid] ? corazonbtntrue : corazonbtnfalse} alt="Me gusta" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Poster />
      <Blog />

    </>
  )
}

export default Vegana;
