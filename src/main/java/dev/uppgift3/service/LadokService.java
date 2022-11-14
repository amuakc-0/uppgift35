package dev.uppgift3.service;

import dev.uppgift3.model.LadokResult;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public interface LadokService {

    //Place methods for Ladok webb service here

    /*
    * Vilka metoder behöver vi?
    * 1. "reg_Resultat": metod som tar emot personnummer, kurskod, modul, datum och betyg. Sätter status = "utkast/klarmarkerad/attesterad/hinder" " och returnerar en List<String>
    * för respektive student
    *e */

    public LadokResult reg_Result(String pnr, String kurskod, String modul, String betyg, LocalDate examinationsDatum, String status);
}
