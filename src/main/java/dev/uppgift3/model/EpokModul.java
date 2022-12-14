package dev.uppgift3.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class EpokModul {

    private @Id
    int value; //PK

    private String label;

    private String kurs_kod; //FK

    public EpokModul(int value, String label, String kurs_kod) {
        this.value = value;
        this.label = label;
        this.kurs_kod = kurs_kod;
    }


    public EpokModul() {

    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getKurs_kod() {
        return kurs_kod;
    }

    public void setKurs_kod(String kurs_kod) {
        this.kurs_kod = kurs_kod;
    }

    @Override
    public String toString() {
        return "EpokModul{" +
                "value=" + value +
                ", label='" + label + '\'' +
                ", kurs_kod='" + kurs_kod + '\'' +
                '}';
    }
}



