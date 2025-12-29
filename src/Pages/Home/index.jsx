import { useAppContext } from "../../Context/useAppContext";
import fpresentacion from "./img/fPresentacion.png";
import hVida from "./img/hvida.pdf";
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
            Desarrollador Front End actualmente tengo experiencia en la creación de
            interfaces y software de usuario eficientes y atractivas de manera
            educativa. Tengo conocimiento en HTML, CSS, JavaScript, Git y Node.js
            con blibliotecas como React. Apasionado por el diseño responsive y la
            mejora continua de la experiencia de usuario. Capaz de trabajar en
            equipos ágiles, a través de mi experiencia educativa y colaborar
            eficazmente.
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