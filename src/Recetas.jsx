import { useState, useEffect } from 'react';
import './App.css'
import iconon from './img/iconon.png';
import flechabtn from './img/flechabtn.png';
import corazonbtnfalse from './img/corazonbtnfalse.png';
import corazonbtntrue from './img/corazonbtntrue.png';



function Recetas() {
    const [recetas, setRecetas] = useState([]);
    const [likess, setLikess] = useState({});

    useEffect(() => {
        
        const fetchRecetas = async () => {
          try {
            const response = await fetch('http://localhost:5000/recetas-aleatorias');
            const data = await response.json();
            setRecetas(data);
             
          } catch (error) {
            console.error('Error fetching recetas:', error);
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
    </>
    
  )
}

export default Recetas;
