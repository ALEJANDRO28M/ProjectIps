package com.sacm.base_de_datos_pacientes.Models;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name="doctores")
public class Doctores {
    
    @Id 
    @Getter @Setter @Column(name="id")
    private int id;

    @Basic
    @Getter @Setter @Column(name="nombre")
    private String nombre;
    @Getter @Setter @Column(name="apellido")
    private String apellido;
    @Getter @Setter @Column(name="especialidad")
    private String especialidad;
    @Getter @Setter @Column(name="telefono")
    private String telefono;
    @Getter @Setter @Column(name="email")
    private String email;


    //RELACIONES ENTRE CLASES-MODELOS


    //@OneToMany @Getter @Setter @Column(name="HistorialMedico_id")
    //private List<HistorialMedico> historialMedico;

    public Doctores() {
    }

    public Doctores(int id, String nombre, String apellido, String especialidad, String telefono, String email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.email = email;
    }

}
    
