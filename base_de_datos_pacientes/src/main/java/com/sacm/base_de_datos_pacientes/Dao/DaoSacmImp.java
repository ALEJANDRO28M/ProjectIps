package com.sacm.base_de_datos_pacientes.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.sacm.base_de_datos_pacientes.Models.User_Of_Patients;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

/**
 * Implementación de la interfaz DaoSacm para manejar las operaciones de base de datos
 * relacionadas con los pacientes utilizando JPA.
 */
@Repository
@Transactional
public class DaoSacmImp implements DaoSacm {

    // EntityManager se utiliza para manejar las operaciones de persistencia en la base de datos.
    @PersistenceContext
    private EntityManager entityManager;

    // Consulta JPQL para obtener los pacientes.
    private String query;

    /**
     * Obtiene la lista de todos los pacientes desde la base de datos.
     * 
     * @return Una lista de objetos {@link User_Of_Patients} que representa todos los pacientes.
     */
    @SuppressWarnings("unchecked") // Suprime advertencias de tipo no verificado en el uso de generics.
    @Override
    public List<User_Of_Patients> MostrarUsers() {
        // Define la consulta JPQL para seleccionar todos los pacientes.
        query = "FROM User_Of_Patients";
        // Ejecuta la consulta y devuelve el resultado como una lista de objetos User_Of_Patients.
        return entityManager.createQuery(query).getResultList();
    }

    /**
     * Elimina un paciente basado en su ID.
     * 
     * @param id El identificador del paciente que se desea eliminar.
     */
    @Override
    public void deleteUser(int id) {
        // Busca el paciente con el ID proporcionado.
        User_Of_Patients user = entityManager.find(User_Of_Patients.class, id);
        // Elimina el paciente encontrado.
        entityManager.remove(user);
    }
}
