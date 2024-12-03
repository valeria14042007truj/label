import { useState, useEffect } from 'react';
import './App.css'
import iconobtn from './img/iconobtn.png';
import corazonfalse from './img/corazonfalse.png';
import corazontrue from './img/corazontrue.png';
import { Link } from 'react-router-dom';



function Rs() {
    const [recetaSemana, setRecetaSemana] = useState('Cargando...');
    const [posterReceta, setPosterReceta] = useState('');
    const [like, setLike] = useState(false);
    const [id, setId] = useState('');

   

    useEffect(() => {
        const fetchRecetaSemana = async () => {
            try {
                const response = await fetch('http://localhost:5000/receta-semana');
                const data = await response.json();
                if (data.length > 0) {
                    setRecetaSemana(data[0].nombre);
                    setPosterReceta(data[0].poster);
                    setId(data[0].id)
                } else {
                    setRecetaSemana('No hay recetas disponibles.');
                }
            } catch (error) {
                console.error('Error fetching receta de la semana:', error);
                setRecetaSemana('Error al cargar la receta.');
            }
        };
  
        fetchRecetaSemana();
    }, []);
  
    const likes = () => {
        setLike(!like); 
        
   };
   
 
  
   
  return (
    <>
       <section className="rs">
        <div className="card">
          <img className="rsi" src={posterReceta} alt="Receta de la semana" />
          <div className="semana">
            <p>¡Receta de la semana!</p>
          </div>
          <div className="res">
          <p>{recetaSemana || 'Cargando...'}</p> 
          </div>
          <div className="botoness">
            <div className="ver">
              <div className="contenido">
                <img src={iconobtn} alt="Ver más" />
                <p><Link to={`/22`}>Ver más</Link></p>
              </div>
            </div>
            <div id="megusta" className="megustas" data-id="1">
              
               <img src={like ? corazontrue : corazonfalse} alt="Me gusta" className="like-icon" onClick={likes} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Rs;
