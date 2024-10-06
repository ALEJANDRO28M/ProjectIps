import { useState, useEffect } from 'react';
import '../css/estiloTablaDatos.css';

/**
 * Método async:
 * 
Tu función DatosUser era una función asíncrona, lo que significa que podía usar 
await para manejar promesas dentro de ella. Sin embargo, simplemente declarar
 una función como async no garantiza que se maneje correctamente el ciclo de vida 
 del componente en React.

Llamada a la API fuera de useEffect:

En tu código original, intentabas ejecutar la llamada a la API directamente dentro
de la función DatosUser en lugar de hacerlo dentro de un useEffect. Esto significaba 
que la función DatosUser se ejecutaba inmediatamente al renderizar el componente, y en
 ese momento, usuarios todavía no tenía los datos necesarios, lo que llevaba a 
 que React intentara renderizar una promesa.
 */

function DatosUser() {
    const [usuarios, setUsuarios] = useState([]); // Estado inicial como un arreglo vacío
    const [loading, setLoading] = useState(true); // Controla el estado de carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Función asíncrona para obtener los datos
        const fetchData = async () => {
            try {
                const peticion = await fetch('http://localhost:3000/Data', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!peticion.ok) {
                    throw new Error('Error en la solicitud');
                }

                const users = await peticion.json(); // Espera a que la promesa se resuelva
                setUsuarios(users); // Actualiza el estado con los datos
            } catch (error) {
                setError(error.message); // Maneja errores si ocurre alguno
            } finally {
                setLoading(false); // Marca que la carga ha terminado
            }
        };

        fetchData(); // Llama a la función al montar el componente
    }, []); // Solo ejecuta el efecto una vez al cargar

    // Si hay un error, mostrarlo
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Mostrar mensaje de carga mientras los datos no están listos
    if (loading) {
        return <p>Cargando datos...</p>;
    }

    // Renderizar la tabla cuando los datos estén listos
    return (
        <div className="tabla-container">
            <h2>Lista de Usuarios</h2>
            <table className="tabla_Users">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Clave</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.usuario}</td>
                            <td>{usuario.clave}</td>
                            <td>{usuario.correo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default DatosUser;
