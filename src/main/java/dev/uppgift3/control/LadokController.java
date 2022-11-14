package dev.uppgift3.control;

import dev.uppgift3.implementation.LadokServiceImplementation;
import dev.uppgift3.model.LadokResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

//Rest controller class for the Ladok webb service, handles the requests from frontend
@RestController
@RequestMapping("/ladok")
@CrossOrigin //specify headers etc. for higher security, allows all if not
public class LadokController {
    @Autowired
    private LadokServiceImplementation ladokServiceImplementation;

    //TODO: Place post, put, get, delete mapping here



    //End point for reg_Resultat. Posts data needed for creating a new LadokResult object. TODO: look into if other datatypes are better
    //TODO: Create front end that loops for each student added (better than double loops in backend)
    @PostMapping("/reg_Resultat")
    public LadokResult regResultat(@RequestParam String pnr, @RequestParam String kurskod, @RequestParam String modul,
                                         @RequestParam String betyg, @RequestParam String exDatum, @RequestParam String status) {

        //Convert String examinationsDatum to LocalDate
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
        String date = exDatum;
        LocalDate examinationsDatum = LocalDate.parse(date, formatter);

        //Calls reg_Result method from implementation class to each save result to DB, get LadokResult object back
       LadokResult newResult = ladokServiceImplementation.reg_Result(pnr, kurskod, modul, betyg, examinationsDatum, status);


        return newResult;

    }
}
