import canva from "./img/canva.png"
import inventario from "./img/Inventarios.png"
import localStorage from "./img/localStorage.png"
import pagCompras from "./img/pagCompras.png"
import tigo from "./img/Tigo.png"

import fondo from "./img/FondoHabilidades.mp4"

import youtube from "./img/youtube.png"

import "./Habilidades.css"



const Habiliddes = () => {

  

    return (
      <div className="FondoHabilidades">

        <video autoPlay loop muted className="videoFondo">
          <source src={fondo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

          <div>
            <a  href="https://videojuegobomba.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="proyecto" src={canva} alt="proyecto" />
            </a>
            <h2>Descripción del Proyecto</h2>
            <p>
              Este proyecto combina JavaScript y Canva para crear una solución interactiva y visualmente atractiva. Utiliza las capacidades de diseño de Canva junto con la programación en JavaScript para desarrollar una experiencia dinámica y funcional,
            </p>
          </div>

          <div>
            <a  href="https://fabian-marthin.github.io/ReactProyect/" target="_blank" rel="noopener noreferrer">
              <img className="proyecto" src={inventario} alt="proyecto" />
            </a>
            <h2>Descripción del Proyecto</h2>
            <p>
              Este proyecto consiste en un software de gestión de inventarios desarrollado con React y LocalStorage. La aplicación permite registrar, actualizar y consultar productos almacenados, proporcionando una solución sencilla y eficaz para la administración de inventarios sin necesidad de un servidor o base de datos externa.
            </p>
            <a  href="https://www.youtube.com/watch?v=QFe8yehN6cw" target="_blank" rel="noopener noreferrer">
              <img className="youtube" src={youtube} alt="youtube" />
            </a>
          
          </div>

          <div>
            <a  href="https://github.com/fabian-marthin/Inventario" target="_blank" rel="noopener noreferrer">
              <img className="proyecto" src={localStorage} alt="proyecto" />
            </a>
            <h2>Descripción del Proyecto</h2>
            <p>
              Este proyecto utiliza React junto con LocalStorage para crear una aplicación web interactiva y eficiente en el manejo de datos persistentes en el navegador. LocalStorage permite almacenar información de manera local sin necesidad de una base de datos externa, mejorando la experiencia del usuario al conservar datos entre sesiones.
            </p>
          </div>
          <div>
            <a  href="https://shoppingreact01.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="proyecto" src={pagCompras} alt="proyecto" />
            </a>
            <h2>Descripción del Proyecto</h2>
            <p>
              Este proyecto consiste en el desarrollo de una página web de compras utilizando React y Vite. La plataforma permite a los usuarios navegar por productos, agregarlos al carrito y finalizar compras de manera eficiente y segura.
            </p>
          </div>
          <div>
            <a  href="https://heroic-dasik-b502c6.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="proyecto" src={tigo} alt="proyecto" />
            </a>
            <p>
              Este proyecto consiste en la creación de una réplica de la página web Tigo, desarrollada con JavaScript, HTML y CSS, con el propósito de educar a los usuarios sobre las diferencias entre una web legítima y una fraudulenta. La idea es ayudar a identificar estafas y proporcionar información para una navegación segura.
            </p>
            <a  href="https://www.youtube.com/watch?v=f6Ynda2Jpao" target="_blank" rel="noopener noreferrer">
              <img className="youtube" src={youtube} alt="youtube" />
            </a>
          </div>

        
      </div>
    );
  };
  
  export default Habiliddes;
  