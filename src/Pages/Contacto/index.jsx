import whatsApp from "../../../public/whatsApp.png"
import gitHub from "../../../public/gitHub.png"
import linkedin from "../../../public/linkedin.png"

import "./Contacto.css"

const Contacto = () => {

    return (
      <div>
        

        <div className="contenedorContacto">
          <a href="https://w.app/xrbv1c" target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="WhatsApp" />
            <h2>WhatsApp</h2>
          </a>

          <a href="https://github.com/fabian-marthin" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" />
            <h2>Github</h2>
          </a>

          <a href="https://www.linkedin.com/in/fabian-david-martinez-martin-80a455224/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin" />
            <h2>Github</h2>
          </a>

        </div>
      </div>
    );
  };
  
  export default Contacto;
  