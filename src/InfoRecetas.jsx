import './info.css'
import cnivel from './img/cnivel.png';
import ck from './img/ckcal.png';
import creloj from './img/creloj.png';
import Blog from './Blog'



import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"



const InfoRecetas = () => {
    const [recetas, setRecetas] = useState([]);
   
    const params = useParams()


    useEffect(() => {
        const fetchReceta = async () => {
            try {
                const response = await fetch(`http://localhost:5000/recetas-aleatorias/${params.id}`); // Asegúrate de que esta URL sea correcta
                const data = await response.json();
                
                setRecetas(data); // Asumiendo que `setRecetas` está diseñado para manejar un solo objeto
            } catch (error) {
                console.error('Error fetching receta:', error);
            }
        };
    
        fetchReceta();
    }, [params.id]); // Asegúrate de incluir params.id como dependencia

    if (!recetas || !recetas.video) {
        return <div>Cargando video...</div>;
    }

    function valor (valor){
        const total = recetas.ingredientes  ? recetas.ingredientes.reduce((acc, item) => acc + item[valor], 0) : 0; 
        return (total.toFixed(2));


    }
     


    
    
   
    
    return(
       
        <>
           <div className="video">
            <p className="pro">Procedimiento:</p>
            <video className="v" controls muted onError={(e) => console.error('Error al cargar el video:', e)}>
    <source src={recetas.video} type="video/mp4" />
    Tu navegador no soporta el formato de video.
</video>
            <h1 className="nombre">{recetas.nombre}</h1>

            <div className="lista">
    <h1 className="ingre">Ingredientes:</h1>
    <ul>
        {recetas.ingredientes && recetas.ingredientes.map((item, index) => (
            <li key={index}>
                {item.ingrediente}
            </li>
        ))}
    </ul>
</div>

            <div className="cuadros">
                <div className="nivel">
                    <img src={cnivel} alt="Nivel de dificultad" />
                    {recetas.nivel}
                </div>
                <div className="kc">
                    <img src={ck} alt="Calorías" />
                    {valor("calorias")}
                </div>
                <div className="tiempo">
                    <img src={creloj} alt="Tiempo de preparación" />
                    {recetas.tiempo}
                </div>
            </div>

            <div className="tabla">
                <h1 className="t">Tabla nutricional</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Carbohidratos</td>
                            <td>{valor("carbohidratos")} g</td>
                        </tr>
                        <tr>
                            <td>Calorias</td>
                            <td>{valor("calorias")} kcal</td>
                        </tr>
                        <tr>
                            <td>Grasa</td>
                            <td>{valor("grasa")} g</td>
                        </tr>
                        <tr>
                            <td>Fibra</td>
                            <td>{valor("fibra")} g</td>
                        </tr>
                        <tr>
                            <td>Proteína</td>
                            <td>{valor("proteina")} g</td>
                        </tr>
                        <tr>
                            <td>Grasas saturadas</td>
                            <td>{valor("grasasSaturadas")} g</td>
                        </tr>
                        <tr>
                            <td>Sodio</td>
                            <td>{valor("sodio")} mg</td>
                        </tr>
                        <tr>
                            <td>Azúcares</td>
                            <td>{valor("azucares")} g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <Blog />
       
        </>
    )

    
}
export default InfoRecetas 