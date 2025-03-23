import fPresentacion from "./img/fPresentacion.png"; 
import fondo from "./img/FondoHome.mp4"
import "./Home.css"
import hVida from "./img/hVida.pdf"

const Home = () => {


  return (
    <div className="fondoHome">

      <video autoPlay loop muted className="videoFondo">
        <source src={fondo} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="presentacionContainer">
        <img className="imgFoto" src={fPresentacion} alt="Imagen de presentación" />
        <div className="presentacion">

          <h2 className="nombre">Favian David Martínez</h2>
          <p>Programador especializado en frontend. Me apasiona diseñar software para la gestión y automatización de procesos. Disfruto aprender constantemente y cuento con conocimientos en HTML, CSS y JavaScript, utilizando bibliotecas como React. Además, tengo experiencia en trabajo en equipo con Git y GitHub, formación en Platzi y estudios en MySQL y PHP en el SENA</p>

        </div>

      </div>

      <div className="contenedorHVida">
        <a href={hVida} download={hVida}>
          <button>Descargar <br /> Hoja de vida</button>
        </a>
      </div>
      
    </div>
      
  );
};

export default Home;