import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Registro from './DiseñosReactUser/Registro';
import InicioSesion from './DiseñosReactUser/InicioDeSesion';

// Componente funcional para manejar las rutas
function App() {
  return  <BrowserRouter>
      <Routes>
        <Route index path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  
}

export default App;
