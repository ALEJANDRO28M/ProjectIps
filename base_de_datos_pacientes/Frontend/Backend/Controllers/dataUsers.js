// Importamos el módulo Express para manejar las rutas
const express = require('express');
// Creamos una instancia del router de Express
const router = express.Router();
// Importamos la conexión a la base de datos
const connection = require('../coneccionBd'); // Asegúrate de que este archivo esté correctamente configurado

router.get('/', async(req, res) => {
    try {
        // Consulta a la base de datos para obtener todos los usuarios
        const [results] = await connection.query(
            "SELECT * FROM `usuarios`");

            res.status(200).json(results);
            console.log(results);
        
    } catch (err) {
        // Si ocurre algún error durante la consulta, lo manejamos aquí
        console.log(err);
        res.status(500).send('Error en el servidor');
    }
});
module.exports=router;

//YAA REVISEEE