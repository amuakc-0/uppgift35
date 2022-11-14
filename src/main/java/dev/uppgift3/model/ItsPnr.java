package dev.uppgift3.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ItsPnr {
    private @Id
    String pnr;

    private String student_anvandare;

    public ItsPnr(String pnr) {
        this.pnr = pnr;
    }

    public ItsPnr() {

    }

    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public String getStudent_anvandare() {
        return student_anvandare;
    }

    public void setStudent_anvandare(String studentAnvandare) {
        this.student_anvandare = studentAnvandare;
    }

}
