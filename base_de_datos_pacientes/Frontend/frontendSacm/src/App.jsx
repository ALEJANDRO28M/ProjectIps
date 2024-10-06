import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importar componentes
import Registro from './DiseñosReactUser/Registro';
import InicioSesion from './DiseñosReactUser/InicioDeSesion';
import DatosUser from './DiseñosReactUser/DatosUser';


 // Asegúrate de que la función esté importada
//NOTA SUPER IMPORTANTE
/**
 * EN EL MOMENTO DE QUERER IMPORTAR UNA RUTA TENER PRESENTE EL NOMBRE DE LA
 * CLASE YA QUE EXISTIO UN INVONVIENTE CON LA RUTA DE DATOS USER, ANTERIORMENTE
 * SE LLAMA VIZUALIZAR DATOS PERO POR ALGUNA RAZON EL IMPORT NO ME FUNCIONABA
 * Y NO ME DEJABA DESERIALIZAR LOS DATOS DE JSX PARA SER VISTOS EN EL SERVIDOR
 * AHORA POR CONSIGUIENTE OBPTE POR CAMBIAR LA CLASE Y LA FUNCION A DATOS USER
 * POR ALGUNA RAZON SI ME FUNCIONO
 */
// Componente funcional para manejar las rutas
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la página de inicio de sesión */}
        <Route index path="/" element={<InicioSesion />} />

        {/* Ruta para el registro de usuario */}
        <Route path="/registro" element={<Registro />} />

        <Route  path="/datos" element={<DatosUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//YAA REVISEEE