import { useState } from 'react';
import '../css/Registros.css'; // Importar el archivo CSS

function Registro() {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Nuevo estado para confirmar la contraseña

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleRegistro = async (event) => {
    event.preventDefault();
    
    console.log('Formulario de registro enviado');
    console.log('Nombre:', usuario);
    console.log('Email:', correo);
    console.log('Password:', clave);
    console.log('Confirmar Password:', confirmPassword);
     
    // Lógica para verificar que las contraseñas coincidan
    if ( clave !== confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return; // Salir si las contraseñas no coinciden
    }
    try {
      const peticion = await fetch('http://localhost:3000/Registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, correo, clave }), // Enviamos los datos en el cuerpo
      });
  
      if (peticion.ok) {
        alert("¡Bienvenido!");
      } else {
        alert('Usuario o clave incorrectos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }

    // Aquí puedes agregar la lógica para enviar los datos a tu backend
  };


  async function registrar() {


  }

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegistro} className="formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            placeholder='Ingrese su nombre'
            type="text"
            id="nombre"
            value={usuario}
            onChange={handleInputChange(setUsuario)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder='Ingrese su email'
            type="email"
            id="email"
            value={correo}
            onChange={handleInputChange(setCorreo)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            placeholder='Genere una contraseña'
            type="password"
            id="password"
            value={clave}
            onChange={handleInputChange(setClave)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label> {/* Etiqueta para confirmar la contraseña */}
          <input
            placeholder='Confirme su contraseña'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)} // Manejar el cambio de la confirmación
            required
          />
        </div>
        
        <button type="submit" className="btn">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
