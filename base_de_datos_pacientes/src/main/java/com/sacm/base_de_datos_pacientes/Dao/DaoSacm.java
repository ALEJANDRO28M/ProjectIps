package com.sacm.base_de_datos_pacientes.Dao;

import java.util.List;

import com.sacm.base_de_datos_pacientes.Models.User_Of_Patients;

/**
 * Interfaz que define los métodos para interactuar con los datos de los pacientes.
 */
public interface DaoSacm {

    /**
     * Obtiene la lista de todos los pacientes.
     * 
     * @return Una lista de objetos {@link User_Of_Patients} que representa todos los pacientes.
     */
    public List<User_Of_Patients> MostrarUsers();
    
    /**
     * Elimina un paciente basado en su ID.
     * 
     * @param id El identificador del paciente que se desea eliminar.
     */
    public void deleteUser(int id);
    
}
