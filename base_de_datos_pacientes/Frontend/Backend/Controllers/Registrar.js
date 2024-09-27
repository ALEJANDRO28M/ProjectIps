// Importamos el módulo Express para manejar las rutas
const express = require('express');
// Creamos una instancia del router de Express
const router = express.Router();
// Importamos la conexión a la base de datos
const connection = require('../coneccionBd'); // Asegúrate de que este archivo esté correctamente configurado

/**
 * Ruta para el manejo de solicitudes de registro de usuarios.
 * Este endpoint recibe un usuario y una clave desde el cuerpo de la solicitud y lo guarda en la base de datos.
 */
router.post('/', async (req, res) => {
    // Obtenemos los datos del cuerpo de la solicitud
    const { usuario, clave, correo } = req.body; 

    try {
      // Insertamos el nuevo usuario en la base de datos
      const [results] = await connection.query(
        "INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `correo`) VALUES (NULL, ?, ?, ?);",
        [usuario, clave, correo]
      );
  
      // Si el registro fue exitoso, enviamos un mensaje de éxito
      if (results.affectedRows > 0) {  // `affectedRows` indica cuántas filas fueron afectadas por la consulta
        res.status(200).send('USUARIO CREADO CON ÉXITO!');
      } else {
        res.status(400).send('NO SE PUDO CREAR EL USUARIO, INTENTE NUEVAMENTE!');
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


  