package dev.uppgift3.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//Entity class for Ladok webb service. Class defines the object => determines what data to be stored in DB.

@Entity
public class LadokResult {

    //Primary key for Ladok entity
    private @Id
    @GeneratedValue int ladokid;  //used instead of pnr since pnr occurs several times

    //Variables (not translated for clarity)
    private String studentAnvandare;

    private String studentNamn;
    private String pnr;

    private String kurskod;
    private String modul;
    private String datum;
    private String betyg;
    private String status;

    //Constructor
    public LadokResult(String studentAnvandare, String studentNamn, String pnr, String kurskod, String modul, String examinationsDatum, String datum, String betyg, String status) {
        this.studentAnvandare = studentAnvandare;
        this.studentNamn = studentNamn;
        this.pnr = pnr;

        this.kurskod = kurskod;
        this.modul = modul;
        this.datum = datum;
        this.betyg = betyg;
        this.status = status;
    }

    //Constructor needed for JPA
    public LadokResult() {

    }

    //Getters and setters


    public String getStudentAnvandare() {
        return studentAnvandare;
    }

    public void setStudentAnvandare(String studentAnvandare) {
        this.studentAnvandare = studentAnvandare;
    }

    public int getLadokid() {
        return ladokid;
    }

    public void setLadokid(int ladokid) {
        this.ladokid = ladokid;
    }

    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public String getKurskod() {
        return kurskod;
    }

    public void setKurskod(String kurskod) {
        this.kurskod = kurskod;
    }

    public String getModul() {
        return modul;
    }

    public void setModul(String modul) {
        this.modul = modul;
    }

    public String getStudentNamn() {
        return studentNamn;
    }

    public void setStudentNamn(String studentNamn) {
        this.studentNamn = studentNamn;
    }


    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public String getBetyg() {
        return betyg;
    }

    public void setBetyg(String betyg) {
        this.betyg = betyg;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return String.format("[Student pnr =' %s', Status = '%s']", pnr, status);
    }
}
