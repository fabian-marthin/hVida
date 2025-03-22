import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div>
            <h2 className="marca">Mi Currículum</h2>
            
            {/* Menú en Pantallas Grandes */}
            <ul className="navbarPc">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/titulos">Titulos</NavLink></li>
                <li><NavLink to="/habilidades">Habilidades</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>

            {/* Botón de menú para móviles */}
            <button className="btnMenu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>

      {/* Menú desplegable en móviles */}
        {menuOpen && (
            <ul className="navbarMobile">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/titulos">Titulos</NavLink></li>
                <li><NavLink to="/habilidades">Habilidades</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        )}
    </nav>
  );
};

export default Navbar;

