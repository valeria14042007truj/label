import './login.css'
import logologin from './img/logologin.png';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [body, setBody] = useState({username: '', password: ''})
  const navigate = useNavigate(); 


  const inputChange=({target})=>{
    const {name, value} = target
    setBody({

      ...body,
      [name] : value
    })

  }

  const OnSubmit = () => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/login', body)
    .then(({data})=>{
      console.log(data)
      navigate('/');
    })
    .catch(({response}) => {
      console.log(response.data)
    })
  }
    
  
    return (
      <>
      <div className="fandes">
      <div className="carta">
        <img className="logologin" src={logologin}/>

        <div className="txt0">
        <p className="txt">La comunidad que inspira tu conina saludable</p>
        </div>

        <div className="iniciar">
           <p className="in">Iniciar Sesion</p> 
        </div>

       
            <form className="inpu">
                 <input type="text" className="user" placeholder="Usuario" value={body.username} onChange={inputChange} name='username' />
                 <input type="password" className="pas" placeholder="Contraseña" value={body.password} onChange={inputChange} name='password' />
                 <button className="sub" onClick={OnSubmit}>Iniciar</button>
            </form>

            <div className="txt0">
        <Link to={'/registrarse'}><p className="txt">Registrate</p></Link>
        </div>

        
     

      </div>
      </div>
      </>
    )
  }
  
  export default Login;
  