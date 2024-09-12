$(document).ready(function () {
  mostrarDatos();
});

async function mostrarDatos() {
  const rawResponse = await fetch('Api/ListPacients', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (!rawResponse.ok) {
    console.error('Error fetching data:', rawResponse.statusText);
    return;
  }

  const responseListPacients = await rawResponse.json();

  let listaDePacientes = '';

  for (let pacient of responseListPacients) {
    let btnEliminar = '<a href="#" onclick="eliminarPaciente(' + pacient.id + ')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
    
    // Asegúrate de que cada dato se coloque en el lugar correcto
    let convertirHtml = '<tr><td>'
      + pacient.id + '</td><td>'
      + pacient.nombres + '</td><td>'
      + pacient.apellidos + '</td><td>'
      + pacient.email + '</td><td>'
      + pacient.edad + '</td><td>'
      + pacient.telefono + '</td><td>'
      + pacient.documento_De_Identidad + '</td><td>'
      + pacient.fecha_De_Nacimiento + '</td><td>'
      + pacient.genero + '</td><td>'
      + btnEliminar + '</td></tr>';

    listaDePacientes += convertirHtml;
  }

  // Actualiza la tabla con los nuevos datos
  $('#Information_pacients tbody').html(listaDePacientes);

  // Inicializa DataTables después de cargar los datos
  $('#Information_pacients').DataTable();

  console.log(responseListPacients);
}

async function eliminarPaciente(id) {
  let confirmar = confirm("¿Desea eliminar este paciente?");
  if (confirmar === true) {
    const request = await fetch('Api/DeleteUser/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!request.ok) {
      console.error('Error deleting patient:', request.statusText);
      return;
    }

    // Recarga la página para actualizar los datos
    location.reload();
  } else {
    alert("¡Función no aplicada!");
  }
}
