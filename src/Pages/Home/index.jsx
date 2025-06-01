import { useAppContext } from "../../Context/useAppContext";
import fpresentacion from "./img/fPresentacion.png";
import hVida from "./img/hVida.pdf";
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
            Programador especializado en frontend. Me apasiona diseñar software para la gestión y automatización de procesos. Disfruto aprender constantemente y cuento con conocimientos en HTML, CSS y JavaScript, utilizando bibliotecas como React. Además, tengo experiencia en trabajo en equipo con Git y GitHub, formación en Platzi y estudios en MySQL y PHP en el SENA
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