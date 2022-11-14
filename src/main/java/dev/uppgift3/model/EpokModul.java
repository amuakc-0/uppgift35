package dev.uppgift3.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class EpokModul {

    private @Id
    @GeneratedValue int id;

    private String kursKod;

    private String modules; //TODO: Map modules https://thorben-janssen.com/ultimate-guide-association-mappings-jpa-hibernate/


}


