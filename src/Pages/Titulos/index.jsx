import "./Titulos.css"
import fondo from "./img/FondoTitulos.mp4"

import platzi from "./img/platzi.png"
import colsubsidio from "./img/ColsubCET.png"

import diploma1 from "./img/diploma1.jpg"
import diploma2 from "./img/diploma2.jpg"
import diploma3 from "./img/diploma3.jpg"
import diploma4 from "./img/diploma4.jpg"
import diploma5 from "./img/diploma5.jpg"
import diploma6 from "./img/diploma6.jpg"
import diploma7 from "./img/diploma7.jpg"
import diploma8 from "./img/diploma8.jpg"
import diploma9 from "./img/diploma9.jpg"
import diploma10 from "./img/diploma10.jpg"

const Titulos = () => {

    return (
      <div className="FondoDiplomas">
        <video autoPlay loop muted className="videoFondo">
          <source src={fondo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <div className="contenedorDiplomas">
          <img className="logoTitulo" src={platzi} alt="" />
          <div>

            <img className="titulo" src={diploma1} alt="React.js con Vite y Tailwindcss" />
            <img className="titulo" src={diploma2} alt="Manipulación del Dom" />
            <img className="titulo" src={diploma3} alt="Frontend Developer" />
            <img className="titulo" src={diploma4} alt="Git y GitHub" />
            <img className="titulo" src={diploma5} alt="Definitivo e HTML y CSS" />
            <img className="titulo" src={diploma6} alt="Clean code en JS" />
            <img className="titulo" src={diploma7} alt="Creación de páginas Web" />
            <img className="titulo" src={diploma8} alt="Patrones de diseño" />
            <img className="titulo" src={diploma9} alt="React.js" />
          </div>
          
          <img className="logoTitulo" src={colsubsidio} alt="" />
          <div>
            

            <img className="titulo" src={diploma10} alt="Power Bi" />
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Titulos;
  