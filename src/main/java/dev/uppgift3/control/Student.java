package dev.uppgift3.control;

public class Student {
    private String studentAnvandare;
    private String studentNamn;
    private String kurs;
    private String pnr;
    private String betyg;
    private String datum;
    private String kurskod;
    private String modul;
    private String status;

    public Student(String studentAnvandare, String studentNamn, String kurs, String pnr, String betyg, String datum, String kurskod, String modul, String status) {
        this.studentAnvandare = studentAnvandare;
        this.studentNamn = studentNamn;
        this.kurs = kurs;
        this.pnr = pnr;
        this.betyg = betyg;
        this.datum = datum;
        this.kurskod = kurskod;
        this.modul = modul;
        this.status = status;
    }

    public String getStudentAnvandare() {
        return studentAnvandare;
    }

    public void setStudentAnvandare(String studentAnvandare) {
        this.studentAnvandare = studentAnvandare;
    }

    public String getStudentNamn() {
        return studentNamn;
    }

    public void setStudentNamn(String studentNamn) {
        this.studentNamn = studentNamn;
    }

    public String getKurs() {
        return kurs;
    }

    public void setKurs(String kurs) {
        this.kurs = kurs;
    }

    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public String getBetyg() {
        return betyg;
    }

    public void setBetyg(String betyg) {
        this.betyg = betyg;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}