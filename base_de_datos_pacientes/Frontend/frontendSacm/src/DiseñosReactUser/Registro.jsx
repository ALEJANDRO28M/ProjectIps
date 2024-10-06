import { useState } from 'react'; // Importar el hook useState de React para manejar el estado
import '../css/Registros.css'; // Importar el archivo CSS para estilizar el componente


function Registro() {
  // Definición de los estados para almacenar los datos del usuario
  const [usuario, setUsuario] = useState(''); // Estado para el nombre de usuario
  const [correo, setCorreo] = useState(''); // Estado para el correo electrónico
  const [clave, setClave] = useState(''); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(''); // Nuevo estado para confirmar la contraseña

  // Función para manejar el cambio en los inputs
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value); // Actualizar el estado correspondiente
  };

  // Función para manejar el envío del formulario
  const handleRegistro = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    console.log('Formulario de registro enviado');
    console.log('Nombre:', usuario);
    console.log('Email:', correo);
    console.log('Password:', clave);
    console.log('Confirmar Password:', confirmPassword);
     
    // Lógica para verificar que las contraseñas coincidan
    if (clave !== confirmPassword) {
      console.error('Las contraseñas no coinciden'); // Mensaje de error si las contraseñas no coinciden
      return; // Salir si las contraseñas no coinciden
    }
    
    try {
      // Realizar la petición al backend para registrar el usuario
      const peticion = await fetch('http://localhost:3000/Registrar', {
        method: 'POST', // Método de la solicitud
        headers: {
          'Content-Type': 'application/json', // Especificar que el contenido es JSON
        },
        body: JSON.stringify({ usuario, correo, clave }), // Enviar los datos del formulario en formato JSON
      });
  
      // Verificar la respuesta del servidor
      if (peticion.ok) {
        alert("¡Bienvenido!"); // Mensaje de bienvenida si la solicitud fue exitosa

      } else {
        alert('Usuario o clave incorrectos'); // Mensaje de error si la solicitud falló
      }
    } catch (error) {
      console.error('Error en la solicitud:', error); // Manejar errores en la solicitud
    }

    // Aquí puedes agregar la lógica para enviar los datos a tu backend
  };

  return (
    <div className="registro-container"> {/* Contenedor principal del formulario de registro */}
      <h2>Registro de Usuario</h2> {/* Título del formulario */}
      <form onSubmit={handleRegistro} className="formulario"> {/* Manejar el envío del formulario */}
        <div className="form-group"> {/* Grupo de input para el nombre */}
          <label htmlFor="nombre">Nombre</label> {/* Etiqueta del input */}
          <input
            placeholder='Ingrese su nombre' // Placeholder para el input
            type="text" // Tipo de input
            id="nombre" // ID del input
            value={usuario} // Valor controlado del input
            onChange={handleInputChange(setUsuario)} // Manejar el cambio en el input
            required // Campo requerido
          />
        </div>
        
        <div className="form-group"> {/* Grupo de input para el correo */}
          <label htmlFor="email">Email</label> {/* Etiqueta del input */}
          <input
            placeholder='Ingrese su email' // Placeholder para el input
            type="email" // Tipo de input
            id="email" // ID del input
            value={correo} // Valor controlado del input
            onChange={handleInputChange(setCorreo)} // Manejar el cambio en el input
            required // Campo requerido
          />
        </div>
        
        <div className="form-group"> {/* Grupo de input para la contraseña */}
          <label htmlFor="password">Contraseña</label> {/* Etiqueta del input */}
          <input
            placeholder='Genere una contraseña' // Placeholder para el input
            type="password" // Tipo de input
            id="password" // ID del input
            value={clave} // Valor controlado del input
            onChange={handleInputChange(setClave)} // Manejar el cambio en el input
            required // Campo requerido
          />
        </div>
        
        <div className="form-group"> {/* Grupo de input para confirmar la contraseña */}
          <label htmlFor="confirmPassword">Confirmar Contraseña</label> {/* Etiqueta para confirmar la contraseña */}
          <input
            placeholder='Confirme su contraseña' // Placeholder para el input
            type="password" // Tipo de input
            id="confirmPassword" // ID del input
            value={confirmPassword} // Valor controlado del input
            onChange={handleInputChange(setConfirmPassword)} // Manejar el cambio de la confirmación
            required // Campo requerido
          />
        </div>
        
        <button type="submit" className="btn">Registrarse</button> {/* Botón para enviar el formulario */}
      </form>
    </div>
  );
}

export default Registro; // Exportar el componente Registro
