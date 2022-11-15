package dev.uppgift3.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class EpokModul {

    private @Id
    @GeneratedValue int modulId; //PK

    private String kursKod; //FK

    private String modulNamn;

}


