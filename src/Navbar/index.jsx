import { NavLink } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import "./Navbar.css";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeModernIcon, AcademicCapIcon, BriefcaseIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {

  const { collapsed, setCollapsed } = useAppContext();


  const toggleSidebar = () => {
      setCollapsed(!collapsed);
  };


  return (
    <div>
      <span style={!collapsed ? {left:'230px'}: {}} className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? 
            <ArrowRightCircleIcon className="icon-toggle"  /> 
            : 
            <ArrowLeftCircleIcon className="icon-toggle" />}
      </span>

      <nav className={`menu ${collapsed ? "collapsed" : ""}`}>
        <ul className="navbarPc">
            <li >
              <NavLink to="/">
                <span>< HomeModernIcon className="iconoMenu"/></span>
                <span className={`label`} style={collapsed ? { display: 'none'} : {} }>Inicio</span>
              </NavLink>
            </li>
            <li >
              <NavLink to="/titulos">
                <span><AcademicCapIcon className="iconoMenu"/></span>
                <span className={`label`} style={collapsed ? { display: 'none' } : {}}>Titulos</span>
              </NavLink>
            </li>
            <li >
              <NavLink to="/habilidades">
                <span><BriefcaseIcon className="iconoMenu"/></span>
                <span className={`label`} style={collapsed ? { display: 'none' } : {}}>Habilidades</span>
              </NavLink>
            </li>
            <li >
              <NavLink to="/contacto">
                <span><PhoneIcon className="iconoMenu"/></span>
                <span className={`label`} style={collapsed ? { display: 'none' } : {}}>Contacto</span>
              </NavLink>
            </li>
        </ul>
        
      </nav>
    </div>
    
  );
};

export default Navbar;

