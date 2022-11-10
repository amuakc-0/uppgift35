package dev.uppgift3.control;

import dev.uppgift3.implementation.LadokServiceImplementation;
import dev.uppgift3.model.LadokResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
    @PostMapping("/reg_Resultat")
    public List<LadokResult> regResultat(@RequestParam String pnr, @RequestParam String kurskod, @RequestParam String modul,
                                         @RequestParam String betyg) {

        //List of all students used for returning a list of status for all students for the course
        List<LadokResult> studentList = new ArrayList<LadokResult>();

        //TODO: change to @requestBody might be necessary to handle several students at the same time then loop the following:

        //Calls reg_Result method from implementation class to each save result to DB, get LadokResult object back
       LadokResult newResult = ladokServiceImplementation.reg_Result(pnr, kurskod, modul, betyg);

        //TODO: get list for all students with status, some kind of loop maybe

        //Dummy list

        studentList.add(newResult);

        return studentList;

    }
}
