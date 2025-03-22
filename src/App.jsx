import React from "react"
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Pages/Home/index"
import Titulos from "./Pages/Titulos";
import Habiliddes from "./Pages/Habilidades";
import Contacto from "./Pages/Contacto";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/titulos", element: <Titulos /> },
    { path: "/habilidades", element: <Habiliddes /> },
    { path: "/contacto", element: <Contacto /> },
  ]);

  return routes;
};

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
