package com.sacm.base_de_datos_pacientes.Models;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="citas") 
public class Citas {

    @Id @Getter @Setter
     @Column(name="id")
    private int id;


    @Temporal(TemporalType.DATE) @Getter @Setter @Column(name="fecha")
    private String fecha;


    @Basic @Getter @Setter @Column(name="motivo")
    private String motivo;

    //RELACIONES ENTRE CLASES O MODELS 
    //MANY TO ONE- MUCHAS CITAS PUEDE TENER UN DOCTOR 
    //@ManyToOne @Getter @Setter @Column(name="Doctor_id")
    //private Doctores doctor;


    //ONE TO MANY- UNA CITA PUEDE TENER MUCHAS PRESCRIPCIONES 
    //@OneToMany @Getter @Setter @Column(name="Prescripciones_id")
    //private List<Prescripciones> prescripciones;

    //@OneToOne @Getter @Setter @Column(name="paciente_id")
    //private User_Of_Patients user_Of_Patients;

    public Citas() {
    }

    public Citas(int id, String fecha, String motivo/* , Doctores doctor*/ /*List<Prescripciones> prescripciones,
            User_Of_Patients user_Of_Patients*/) {
        this.id = id;
        this.fecha = fecha;
        this.motivo = motivo;
       // this.doctor = doctor;
        //this.prescripciones = prescripciones;
        //this.user_Of_Patients = user_Of_Patients;
    }




}
