import { useAppContext } from "../../Context/useAppContext";
import fpresentacion from "./img/fPresentacion.png";
import hVida from "../../../public/hVida.pdf";
import "./Home.css"

const Home = () => {

  const { collapsed } = useAppContext();
  console.log(collapsed);

  return (
    <div className={`hero-container ${collapsed ? "collapsed" : ""}`}>
      <div className="hero-grid">
        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Hola, soy <span className="highlight">Favian Martin</span> 
          </h1>
          <p>
          Tecnólogo en Análisis y Desarrollo de Software en formación en el SENA, con
conocimientos en desarrollo frontend y backend, bases de datos y construcción
de APIs. Experiencia práctica adquirida mediante proyecto productivo de software
empresarial, participando en el diseño, desarrollo e implementación de una
solución web con backend en C#, frontend en React y base de datos relacional.
Actualmente inscrito para homologación a Ingeniería de Sistemas, con interés en
roles Junior Frontend, Backend o Fullstack, alta capacidad de aprendizaje y trabajo
en equipo.
          </p>
          <a href={hVida} download={hVida}>
            <button className="cv-button">Download CV</button>
          </a>
          
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <div className="image-border">
            <img
              src={fpresentacion}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;