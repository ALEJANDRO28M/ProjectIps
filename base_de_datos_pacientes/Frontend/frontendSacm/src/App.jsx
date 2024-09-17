import React, { useState } from 'react';
import '../css/colores.css';
import '../css/fondo.css'
function InicioDeSesion() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [recuerdame, setRecuerdame] = useState(false);

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecuerdameChange = (e) => {
    setRecuerdame(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para manejar el inicio de sesión
    console.log("Usuario:", usuario);
    console.log("Password:", password);
    console.log("Recuérdame:", recuerdame);
  };

  return (
    <div>
      <h1 className="TituloSesion">BIENVENIDO A SACM</h1>
      <i className="subtituloSesion">Nunca es demasiado tarde para ser lo que podrías haber sido.</i>
      <div className="ContenedorForm">
        <form className="Formulario" onSubmit={handleSubmit}>
          <label htmlFor="usuario" className="LabelsForms">USUARIO</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Ingrese el usuario"
            value={usuario}
            onChange={handleUsuarioChange}
          />
          <br /><br />
          <a href="#" className="olvido-usuario">¿Olvidaste tu usuario?</a>
          <br /><br />
          <label htmlFor="password" className="LabelsForms">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <br /><br />
          <a href="#" className="olvido-usuario">¿Olvidaste tu contraseña?</a>
          <br /><br />
          <input
            type="checkbox"
            id="recuerdame"
            name="recuerdame"
            checked={recuerdame}
            onChange={handleRecuerdameChange}
          />
          <label htmlFor="recuerdame" id="recuerdame">Recuérdame</label>
          <br /><br /><br /><br />
          <button type="submit" id="ButtonForm">Iniciar Sesión</button>
        </form>
      </div>
      <footer className="creditos">
        <p>© 2024 Luis Alejandro Forero Zapata. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default InicioDeSesion;
