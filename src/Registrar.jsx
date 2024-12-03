import './login.css'
import logologin from './img/logologin.png';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registrar() {
  const [estado, setEstado] = useState ({
    usuario: '',
    gmail:'',
    contrasena:''
  });


  const agregar = (e) => {
    const valor = e.target.value;
    setEstado({
      ...estado,
      [e.target.name]: valor
    });
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();

    const { usuario, gmail, contrasena } = estado;

    if (!usuario || !gmail || !contrasena) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/registrar', {
        usuario,
        gmail,
        contrasena
      });

      if (response.status === 200) {
        alert('Usuario registrado exitosamente');
        // Aquí puedes redirigir o hacer algo más, como limpiar el formulario
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Hubo un error al registrar el usuario. Intenta nuevamente.');
    }
  };
    return (
      <>
      <div className="fandes">
      <div className="carta">
        <img className="logologin" src={logologin}/>

        <div className="txt0">
        <p className="txt">La comunidad que inspira tu conina saludable</p>
        </div>

        <div className="iniciar">
           <p className="in">Registrate</p> 
        </div>

       
            <form className="inpu" onSubmit={registrarUsuario}>
                  <input type="text" className="user" placeholder="Usuario" value={estado.usuario} onChange={agregar} name='usuario' />
                  <input type="email" className="user" placeholder="Gmail" value={estado.gmail} onChange={agregar} name='gmail' />
                 <input type="password" className="pas" placeholder="Crea una contraseña" value={estado.contrasena} onChange={agregar} name='contrasena' />
                 <button className="sub" type="submit">Continuar</button>
            </form>
            <Link to={'/login'}><p className="txt">Iniciar Sesion</p></Link>
        

        
     

      </div>
      </div>
      </>
    )
  }
  
  export default Registrar;
  