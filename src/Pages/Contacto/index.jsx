import fondo from "./img/FondoContacto.mp4"
import whatsApp from "./img/whatsApp.png"
import gitHub from "./img/GitHub.png"

import "./Contacto.css"

const Contacto = () => {
  

    return (
      <div>
        <video autoPlay loop muted className="videoFondo">
          <source src={fondo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <div className="contenedorContacto">
          <a href="https://w.app/xrbv1c" target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="WhatsApp" />
            <h2>WhatsApp</h2>
          </a>

          <a href="https://github.com/fabian-marthin" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" />
            <h2>Github</h2>
          </a>
        </div>
      </div>
    );
  };
  
  export default Contacto;
  