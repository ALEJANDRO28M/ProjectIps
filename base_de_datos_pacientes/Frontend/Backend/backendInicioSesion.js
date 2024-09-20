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

/**
 * CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla las solicitudes HTTP
 * que provienen de un origen diferente al del servidor. 
 * En este caso, al usar cors(), permitimos que clientes alojados en otros dominios puedan acceder a nuestras rutas.
 */

// Importamos la conexión a la base de datos desde un archivo externo
const connection = require('./coneccionBd');

/**
 * Ruta para el manejo de solicitudes de login.
 * Este endpoint recibe un usuario y una clave como parámetros de consulta (query parameters) y valida 
 * las credenciales contra una base de datos.
 */
app.get('/Login', async (req, res) => {

  // Obtenemos los parámetros de la URL (usuario y clave) que llegan como parte de la consulta
  const datos = req.query; 
  // Ejemplo de URL: /Login?usuario=john&clave=1234
  // req.query es un objeto que contiene estos parámetros: {usuario: 'john', clave: '1234'}
  
  // Aquí se ejecuta una consulta simple a la base de datos para verificar si las credenciales son correctas
  try {
    /**
     * Los signos de interrogación (?) en la consulta SQL son placeholders que serán reemplazados 
     * por los valores de datos.usuario y datos.clave. Esto es una medida de seguridad para evitar inyecciones SQL.
     */
    const [results, fields] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `clave` = ?",
      [datos.usuario, datos.clave]
    );

    // Si el usuario existe en la base de datos, se envía un mensaje de éxito
    if (results.length > 0) {
      res.status(200).send('INICIO DE SESION CORRECTO');
    } else {
      // Si el usuario no existe o las credenciales son incorrectas, se envía un mensaje de error
      res.status(401).send('DATOS INCORRECTOS');
    }

    // Para depuración: imprimimos los resultados de la consulta en la consola del servidor
    console.log(results); // Contiene las filas devueltas por el servidor
    console.log(fields);  // Contiene metadatos adicionales sobre los resultados, si están disponibles
  } catch (err) {
    // Si ocurre algún error durante la consulta, se imprime en la consola del servidor
    console.log(err);
    // También podrías enviar una respuesta con error al cliente si lo deseas
    res.status(500).send('Error en el servidor');
  }
});

/**
 * Ruta básica que responde con 'Hello World' al acceder a la raíz del servidor (/)
 * Gracias a CORS, este endpoint también podrá ser accedido desde otros orígenes.
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciamos el servidor y lo hacemos escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
