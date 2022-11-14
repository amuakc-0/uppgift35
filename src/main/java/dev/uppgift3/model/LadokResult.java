package dev.uppgift3.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

//Entity class for Ladok webb service. Class defines the object => determines what data to be stored in DB.

@Entity
public class LadokResult {

    //Primary key for Ladok entity
    private @Id
    @GeneratedValue int ladokid;  //use pnr as PK is perhaps better? Not sure if a Ladok account can exist without a pnr

    //Variables (not translated for clarity)
    private String pnr;
    private String kurskod;
    private String modul;
    private LocalDate examinationsDatum;
    private String betyg;
    private String status;

    //Constructor
    public LadokResult(String pnr, String kurskod, String modul, LocalDate examinationsDatum, String betyg, String status) {
        this.pnr = pnr;
        this.kurskod = kurskod;
        this.modul = modul;
        this.examinationsDatum = examinationsDatum;
        this.betyg = betyg;
        this.status = status;
    }

    //Constructor needed for JPA
    public LadokResult() {

    }

    //Getters and setters

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

    public LocalDate getDatum() {
        return examinationsDatum;
    }

    public void setDatum(LocalDate datum) {
        this.examinationsDatum = datum;
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
