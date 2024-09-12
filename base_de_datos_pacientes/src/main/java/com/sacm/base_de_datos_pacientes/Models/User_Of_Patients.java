package com.sacm.base_de_datos_pacientes.Models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * Representa un paciente en el sistema. Esta entidad se mapea a la tabla 'pacientes'
 * en la base de datos.
 */
@Entity
@Table(name="pacientes")
public class User_Of_Patients {

    // Identificador único del paciente. Mapeado a la columna 'id' en la base de datos.
    @Id 
    @Getter @Setter @Column(name="id")
    private int id;

    // Nombre del paciente. Mapeado a la columna 'nombre' en la base de datos.
    @Getter @Setter @Column(name="nombre")
    private String nombres;

    // Apellido del paciente. Mapeado a la columna 'apellido' en la base de datos.
    @Getter @Setter @Column(name="apellido")
    private String apellidos;

    // Correo electrónico del paciente. Mapeado a la columna 'email' en la base de datos.
    @Getter @Setter @Column(name="email")
    private String email;

    // Edad del paciente. Mapeado a la columna 'edad' en la base de datos.
    @Getter @Setter @Column(name="edad")
    private String edad;

    // Número de teléfono del paciente. Mapeado a la columna 'telefono' en la base de datos.
    @Getter @Setter @Column(name="telefono")
    private String telefono;

    // Documento de identidad del paciente. Mapeado a la columna 'documento_de_identidad' en la base de datos.
    @Getter @Setter @Column(name="documento_de_identidad")
    private String documento_De_Identidad;

    // Fecha de nacimiento del paciente. Mapeado a la columna 'fecha_de_nacimiento' en la base de datos.
    @Getter @Setter @Column(name="fecha_de_nacimiento")
    private LocalDate fecha_De_Nacimiento;

    // Género del paciente. Mapeado a la columna 'genero' en la base de datos.
    @Getter @Setter @Column(name="genero")
    private String genero;

    // Constructor vacío necesario para JPA.
    public User_Of_Patients() {
    }

    /**
     * Constructor con todos los atributos para inicializar una nueva instancia de User_Of_Patients.
     * 
     * @param id Identificador único del paciente.
     * @param nombres Nombre del paciente.
     * @param apellidos Apellido del paciente.
     * @param fecha_De_Nacimiento Fecha de nacimiento del paciente.
     * @param documento_De_Identidad Documento de identidad del paciente.
     * @param telefono Número de teléfono del paciente.
     * @param email Correo electrónico del paciente.
     * @param genero Género del paciente.
     * @param edad Edad del paciente.
     */
    public User_Of_Patients(int id, String nombres, String apellidos, LocalDate fecha_De_Nacimiento,
            String documento_De_Identidad, String telefono, String email, String genero,
            String edad) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha_De_Nacimiento = fecha_De_Nacimiento;
        this.documento_De_Identidad = documento_De_Identidad;
        this.telefono = telefono;
        this.email = email;
        this.genero = genero;
        this.edad = edad;
    }

    // RELACIONES ENTRE CLASES-MODELOS (comentado por ahora)
    // @OneToMany @Getter @Setter @Column(name="id")
    // private List<Citas> citas;
    
    // @OneToMany @Getter @Setter @Column(name="id")
    // private List<HistorialMedico> historialMedico;

}
