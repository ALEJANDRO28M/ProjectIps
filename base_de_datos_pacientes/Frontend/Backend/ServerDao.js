// Importamos el módulo Express para crear nuestro servidor web
const express = require('express');
// Inicializamos la aplicación Express
const app = express();
// Importamos el módulo CORS para habilitar la política de seguridad de intercambio de recursos entre diferentes orígenes (Cross-Origin Resource Sharing)
const cors = require('cors');
// Definimos el puerto en el que va a correr el servidor
const port = 3000;

// Usamos el middleware cors() para habilitar CORS en todas las rutas de la aplicación
app.use(cors());

// Importamos la conexión a la base de datos desde un archivo externo
const connection = require('./coneccionBd');  // Asegúrate de que este archivo esté correctamente configurado

/**
 * CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla las solicitudes HTTP
 * que provienen de un origen diferente al del servidor. 
 * En este caso, al usar cors(), permitimos que clientes alojados en otros dominios puedan acceder a nuestras rutas.
 */

// Usamos express.json() para parsear el cuerpo de las solicitudes con JSON
app.use(express.json());  // Asegúrate de incluir esto si vas a manejar JSON en el cuerpo de las solicitudes

// Importamos las rutas para el servidor express
const iniciarSesion = require('./Controllers/backendInicioSesion');
const registrarUser = require('./Controllers/Registrar');
const dataUser = require('./Controllers/dataUsers');

// Vamos a generar las rutas del servidor de los siguientes archivos
app.use('/Login', iniciarSesion);      // Para manejar la ruta de inicio de sesión
app.use('/Registrar', registrarUser);  // Para manejar la ruta de registro
app.use('/Data', dataUser);
// Ruta raíz
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

// Exportamos `app` y `connection` si es necesario en otros archivos
module.exports = { app, connection };
