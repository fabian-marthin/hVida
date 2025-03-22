import fPresentacion from "./img/fPresentacion.png"; 
import fondo from "./img/FondoHome.mp4"
import "./Home.css"

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
          <p>Soy programador especializado en frontend. Me apasiona diseñar software para la gestión y automatización de procesos. Disfruto aprender constantemente y cuento con conocimientos en HTML, CSS y JavaScript, utilizando bibliotecas como React. Además, tengo experiencia en trabajo en equipo con Git y GitHub, formación en Platzi y estudios en MySQL y PHP en el SENA</p>

          <p>Front end Developer</p>
          <p>Direccion: Cra 9 este # 29 d 23 Soacha, Cundinamarca</p>
          <p>Email: marttin74@gmail.com</p>
          <p>Telefono: (310) 326-0773</p>          

        </div>

      </div>
      
    </div>
      
  );
};

export default Home;