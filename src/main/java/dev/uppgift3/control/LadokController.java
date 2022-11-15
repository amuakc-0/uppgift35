package dev.uppgift3.control;

import dev.uppgift3.implementation.LadokServiceImplementation;
import dev.uppgift3.model.LadokResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

//Rest controller class for the Ladok webb service, handles the requests from frontend
@RestController
@RequestMapping("/ladok")
@CrossOrigin //specify headers etc. for higher security, allows all if not
public class LadokController {
    @Autowired
    private LadokServiceImplementation ladokServiceImplementation;

    //TODO: Place post, put, get, delete mapping here


    @RequestMapping("/reg_Resultat")
    public List<LadokResult> reg_Resultat(@RequestParam(value = "listOfPnr[]") String[] listOfPnr, @RequestParam(value = "listOfKurskod[]") String[] listOfKurskod,
                                          @RequestParam(value = "listOfModul[]") String[] listOfModul, @RequestParam(value = "listOfBetyg[]") String[] listOfBetyg,
                                          @RequestParam(value = "listOfExDatum[]") String[] listOfExDatum, @RequestParam(value = "listOfUtkast[]") String[] listOfUtkast) {

        //List over all results added by method, this is what the method returns
        List<LadokResult> resultsAdded = new ArrayList<LadokResult>();

        //Adding parameters (arrays) to a list of arrays
            ArrayList<String[]> list = new ArrayList<String[]>();
            int numberOfPersons = listOfBetyg.length;
            String pnrAdd[] = listOfPnr; //[820330, 029830]
            String kurskodAdd[] = listOfKurskod;
            String modulAdd[] = listOfModul;
            String betygAdd[] = listOfBetyg;
            String exDatumAdd[] = listOfExDatum;
            String statusAdd[] = listOfUtkast;



            //Saves every student in separate arraylist

            for(int i = 0; i < numberOfPersons; i++) {

                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
                String date = exDatumAdd[i];
                LocalDate examinationsDatum = LocalDate.parse(date, formatter);

                LadokResult newResult = ladokServiceImplementation.reg_Result(listOfPnr[i], listOfKurskod[i], listOfModul[i], betygAdd[i], examinationsDatum,statusAdd[i]);

                //TODO: save person as new result
            }


        return null;
    }

    //End point for reg_Resultat. Posts data needed for creating a new LadokResult object.
   /* @PostMapping("/reg_Resultat")
    public LadokResult regResultat(@RequestParam String pnr, @RequestParam String kurskod, @RequestParam String modul,
                                         @RequestParam String betyg, @RequestParam String exDatum, @RequestParam String status) {

        //Convert String examinationsDatum to LocalDate
       DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
       String date = exDatum;
       LocalDate examinationsDatum = LocalDate.parse(date, formatter);

        //Calls reg_Result method from implementation class to each save result to DB, get LadokResult object back
       LadokResult newResult = ladokServiceImplementation.reg_Result(pnr, kurskod, modul, betyg, examinationsDatum, status);


        return newResult;

    } */
}
