package com.sacm.base_de_datos_pacientes.Controllers.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sacm.base_de_datos_pacientes.Dao.DaoSacmImp;
import com.sacm.base_de_datos_pacientes.Models.User_Of_Patients;

/**
 * Controlador para manejar las operaciones relacionadas con los pacientes.
 */
@RestController
public class PacientsController {

    // Inyección de dependencia del DAO para la manipulación de datos
    @Autowired
    private DaoSacmImp daoSacmImp;

    /**
     * Obtiene la lista de todos los pacientes.
     * 
     * @return Una lista de objetos User_Of_Patients.
     */
    @GetMapping("Api/ListPacients")
    public List<User_Of_Patients> pacientes() {
        // Llama al método del DAO para obtener la lista de pacientes
        return daoSacmImp.MostrarUsers();
    }

    /**
     * Elimina un paciente basado en el ID proporcionado.
     * 
     * @param id El ID del paciente a eliminar.
     */
    @DeleteMapping("Api/DeleteUser/{id}")
    public void eliminarPaciente(@PathVariable int id) {
        // Llama al método del DAO para eliminar al paciente con el ID proporcionado
        daoSacmImp.deleteUser(id);
    }
    // cambios
}
