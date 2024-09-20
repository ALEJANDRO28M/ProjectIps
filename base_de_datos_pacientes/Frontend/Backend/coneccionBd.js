// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'loginexpress',
});
/**
 * EL SIGUIENTE COMANDO EXPORTA LA CONEXION DE LA BASE DE
 * DATOS A OTRO U OTROS ARCHIVOS JS 
 */
module.exports = connection; 