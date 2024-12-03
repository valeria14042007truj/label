import { useState, useEffect } from 'react';
import './App.css'
import iconon from './img/iconon.png';
import flechabtn from './img/flechabtn.png';
import corazonbtnfalse from './img/corazonbtnfalse.png';
import corazonbtntrue from './img/corazonbtntrue.png';
import { Link } from 'react-router-dom';



function Recetas({busqueda}) {
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


    const recetasFiltradas = recetas.filter((receta) =>
      receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
      
    );

    const toggleLike = (id) => {
      setLikess((prevLikess) => {
          const newLikess = { ...prevLikess };  // Creamos una copia del objeto `likess`
          
          // Si la receta ya está "liked", la desmarcamos (eliminamos la clave)
          if (newLikess[id]) {
              delete newLikess[id]; 
          } else {
              // Si no está "liked", la marcamos (añadimos la clave con cualquier valor)
              newLikess[id] = true;
          }

          return newLikess;  // Retornamos el nuevo objeto `likess`
      });
  };
  
  
    
  
  return (
    <section className="recetas">
      <div className="grid">
        {recetasFiltradas.length > 0 ? (
          recetasFiltradas.map((receta) => (
            <div className="item" key={receta.id}>
              <img className="imgreceta" src={receta.imagen} alt={receta.nombre} />
              <div className="titulo">
                <p>{receta.nombre}</p>
              </div>
              <div className="niveln">
                <img src={iconon} alt="Dificultad" />
                <p>{receta.nivel}</p>
              </div>
              <div className="botonlike">
                <div className="boton">
                  <img src={flechabtn} alt="Ver más" />
                  <p>
                    <Link to={`/${receta.id}`}>Ver más</Link>
                  </p>
                </div>
                <div className="corazon" onClick={() => toggleLike(receta.id)}>
                  <img
                    src={likess[receta.id] ? corazonbtntrue : corazonbtnfalse}
                    alt="Me gusta"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="titulo">No se encontraron recetas que coincidan con tu búsqueda.</p>
        )}
      </div>
    </section>
  );
}

export default Recetas;