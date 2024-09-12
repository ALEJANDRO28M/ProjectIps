package com.sacm.base_de_datos_pacientes.Models;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="prescripcion de los pacientes")
public class Prescripciones {

    @Id 
     @Getter @Setter @Column(name="id")
    private int id;

    @Basic @Getter @Setter @Column(name="dosis")
    private String dosis;

    @Basic @Getter @Setter @Column(name="frecuencia")
    private String frecuencia;

    //RELACIONES ENTRE CLASES-MODELOS
    //@ManyToOne @Getter @Setter @Column(name="citas_id")
   // private Citas cita;

    public Prescripciones() {
    }

    public Prescripciones(int id, String dosis, String frecuencia/*Citas cita*/) {
        this.id = id;
        this.dosis = dosis;
        this.frecuencia = frecuencia;
        //this.cita = cita;
    }

   
}
