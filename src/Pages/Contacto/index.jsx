import fondo from "./img/FondoContacto.mp4"


const Contacto = () => {

    return (
      <div>
        <video autoPlay loop muted className="videoFondo">
          <source src={fondo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <div>
          
        </div>
      </div>
    );
  };
  
  export default Contacto;
  