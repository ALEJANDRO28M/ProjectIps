// Importamos el módulo Express para manejar las rutas
const express = require('express');
// Creamos una instancia del router de Express
const router = express.Router();
// Importamos la conexión a la base de datos
const connection = require('../coneccionBd'); // Asegúrate de que este archivo esté correctamente configurado

/**
 * Ruta para el manejo de solicitudes de login.
 * Este endpoint recibe un usuario y una clave como parámetros de consulta (query parameters)
 * y valida las credenciales contra una base de datos.
 */
router.get('/', async (req, res) => {
  // Obtenemos los parámetros de la URL (usuario y clave) que llegan como parte de la consulta
  const datos = req.query;
  // Ejemplo de URL: /Login?usuario=john&clave=1234
  // req.query es un objeto que contiene estos parámetros: {usuario: 'john', clave: '1234'}
  
  try {
    // Consulta a la base de datos para verificar si las credenciales son correctas
    const [results] = await connection.query(
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
    console.log(results);
  } catch (err) {
    // Si ocurre algún error durante la consulta, lo manejamos aquí
    console.log(err);
    res.status(500).send('Error en el servidor');
  }
});

// Exportamos el router para usarlo en otros archivos
module.exports = router;



