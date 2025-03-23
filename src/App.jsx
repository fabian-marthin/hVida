import React from "react"
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Pages/Home/index"
import Titulos from "./Pages/Titulos";
import Habiliddes from "./Pages/Habilidades";
import Contacto from "./Pages/Contacto";

const AppRoutes = ({ menuOpen, setMenuOpen }) => {

  let routes = useRoutes([
    { path: "/", element: <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> },
    { path: "/titulos", element: <Titulos menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> },
    { path: "/habilidades", element: <Habiliddes menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> },
    { path: "/contacto", element: <Contacto menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> },
  ]);

  return routes;
};

function App() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <BrowserRouter>
        <AppRoutes menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </BrowserRouter>
    </>
  )
}

export default App
