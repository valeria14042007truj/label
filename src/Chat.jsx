import './chat.css';
import im from './img/im.jpg';
import s from './img/salirchat.png';
import enviar from './img/enviar.png';
import { useState } from 'react';

function Chat() {
  const [mensajes, setMensajes] = useState([]);
  const [mensajeActual, setMensajeActual] = useState('');
  const [usuarioActual, setUsuarioActual] = useState('usuario'); // Puede alternar entre 'usuario' y 'contacto'

  const enviarMensaje = (e) => {
    e.preventDefault();

    if (!mensajeActual.trim()) return;

    const nuevoMensaje = {
      texto: mensajeActual,
      tipo: usuarioActual, // usuario o contacto
    };

    setMensajes([...mensajes, nuevoMensaje]); // Agregar mensaje al historial
    setMensajeActual(''); // Limpiar campo de texto

    // Simular respuesta automática del otro usuario
    setTimeout(() => {
      const respuesta = {
        texto: '¡Hola! ¿Cómo estás? Te interesa una asesoria conmigo, platicame tus objetivos',
        tipo: usuarioActual === 'usuario' ? 'contacto' : 'usuario', // Alternar
      };
      setMensajes((prevMensajes) => [...prevMensajes, respuesta]);
    }, 1000);
  };

  return (
    <>
      <div className="contacto">
        <img className="fotoi" src={im} alt="Contacto" />
        <p>Angelica Dominguez</p>
        <div className="saliri">
          <img src={s} alt="Salir" />
        </div>
      </div>

      <div className="mensajes">
        {mensajes.map((msg, index) => (
          <div
            key={index}
            className={`mensaje ${msg.tipo === 'usuario' ? 'mensaje-usuario' : 'mensaje-contacto'}`}
          >
            <p className="men">{msg.texto}</p>
          </div>
        ))}
      </div>

      <div className="en">
        <form className="ena" onSubmit={enviarMensaje}>
          <input
            type="text"
            className="enaa"
            placeholder="Mensaje"
            value={mensajeActual}
            onChange={(e) => setMensajeActual(e.target.value)}
          />
          <button className="e" type="submit">
            <img src={enviar} alt="Enviar" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;
