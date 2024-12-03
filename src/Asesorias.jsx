import './as.css'
import estrella from './img/estrella.png';
import im from './img/im.png';
import ima from './img/im.jpg'
import { Link } from 'react-router-dom';

function Asesorias (){

    return(
        <>
        <div className="con">
      <div>
        <img className="img" src={ima} alt="Imagen de perfil" />
      </div>

      <div className="nombre">
        <p className="n">Angelica Dominguez</p>
        <p className="des">
          Nutrióloga especializada en ofrecer asesorías personalizadas para ayudarte a alcanzar tus objetivos de salud y bienestar.
        </p>

        <div className="p2">
      <Link to={'/chat'}><div className="botonn">Mensaje</div> </Link>
          <div className="estrella">
            <img className="imge" src={estrella} alt="Estrella de calificación" />
            <div className="estrellas">4.5</div>
          </div>
        </div>
      </div>
    </div>

    <div className="con">
      <div>
        <img className="img" src={im} alt="Imagen de perfil" />
      </div>

      <div className="nombre">
        <p className="n">Valeria Trujillo</p>
        <p className="des">
          Nutrióloga especializada en ofrecer asesorías personalizadas para ayudarte a alcanzar tus objetivos de salud y bienestar.
        </p>

        <div className="p2">
          <div className="botonn">Mensaje</div>
          <div className="estrella">
            <img className="imge" src={estrella} alt="Estrella de calificación" />
            <div className="estrellas">3.7</div>
          </div>
        </div>
      </div>
    </div>
        </>


    )

}
export default Asesorias; 