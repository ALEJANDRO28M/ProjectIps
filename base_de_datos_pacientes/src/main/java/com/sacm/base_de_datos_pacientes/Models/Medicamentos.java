package com.sacm.base_de_datos_pacientes.Models;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name="medicamentos")
public class Medicamentos {

    @Id  @Getter @Setter @Column(name="id")
    private int id;

    @Basic @Getter @Setter @Column(name="nombre")
    private String nombre;

    @Basic @Getter @Setter @Column(name="descripcion")
    private String descripcion;

    @Basic @Getter @Setter @Column(name="dosis")
    private String dosis;

    @Basic @Getter @Setter @Column(name="frecuencia")
    private String frecuencia;


    //RELACIONES ENTRE CLASES-MODELOS
    //@OneToMany @Getter @Setter @Column(name="Prescripcion_id")
    //private List<Prescripciones> prescripcion;


    public Medicamentos() {
    }


    public Medicamentos(int id, String nombre, String descripcion, String dosis, String frecuencia
           /* List<Prescripciones> preescripcion*/ ) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.dosis = dosis;
        this.frecuencia = frecuencia;
        //this.prescripcion = preescripcion;
    }

    
    
    
}
