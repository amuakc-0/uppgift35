package dev.uppgift3.implementation;

import dev.uppgift3.model.LadokResult;
import dev.uppgift3.repository.LadokRepository;
import dev.uppgift3.service.LadokService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Service
public class LadokServiceImplementation implements LadokService {

    @Autowired
    private LadokRepository ladokRepository;

    @Override
    public LadokResult reg_Result(String studentAnvandare, String studentNamn, String pnr, String kurskod, String modul, String datum, String betyg, String status) {

        //Creating a new entity with posted parameters

        LadokResult newResult = new LadokResult();
       newResult.setStudentAnvandare(studentAnvandare);
       newResult.setStudentNamn(studentNamn);
       newResult.setPnr(pnr);
       newResult.setKurskod(kurskod);
        newResult.setModul(modul);
        newResult.setDatum(datum);
        newResult.setBetyg(betyg);
        newResult.setStatus(status);

        //Saves new entity to DB
        ladokRepository.save(newResult);


        return newResult;
    }

    //Implement and override methods from LadokService

}
