package dev.uppgift3.model;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.List;

@Entity

public class CanvasStudent {
    @Id
    private String studentAnvandare; //PK
    private String studentNamn;

    private String kurs; //TODO: change to container of courses since one student can have several courses


    public CanvasStudent(String studentAnvandare, String studentNamn, String kurs) {
        this.studentAnvandare = studentAnvandare;
        this.studentNamn = studentNamn;
        this.kurs = kurs;
    }

    public CanvasStudent() {

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

    @Override
    public String toString() {
        return "CanvasStudent{" +
                "studentAnvandare='" + studentAnvandare + '\'' +
                ", studentNamn='" + studentNamn + '\'' +
                ", kurs=" + kurs +
                '}';
    }
}


