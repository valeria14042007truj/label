import { useState } from 'react'
import logo from './img/logo.png';
import menuImg from './img/menu.png';
import salirMenu from './img/salirmenu.png';
import './App.css'




function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };

      const handleClick = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('active'); // Alternar clase 'active' en el body
      };

      const toggleSalir = () => {
        setMenuVisible(false);
      };
  
  return (
    <>
       <header>
        <a href="index.html">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </a>

        <ul className="claro">
          <li id="li" className={`switch ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <svg className="ico1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
            </svg>
            <svg className="ico2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
            </svg>
          </li>
        </ul>

        <div className="menu" onClick={toggleMenu}>
          <img src={menuImg} alt="menu" />
        </div>
      </header>

      <div className={`ventana ${menuVisible ? '' : 'hidden'}`}>
        <img id="salir" src={salirMenu} alt="Salir" onClick={toggleSalir} />
        <div>
          <a href="">
            <p className="color">Mis guardados</p>
          </a>
        </div>

        <div className="color">
          <a href="">
            <p>Buscar recetas</p>
          </a>
        </div>

        <div className="comunidad">
          <a href="">
            <p>Comunidad</p>
          </a>
        </div>

        <div className="color">
          <a href="">
            <p>Blog</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;
