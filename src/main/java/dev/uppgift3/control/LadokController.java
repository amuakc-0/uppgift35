package dev.uppgift3.control;

import dev.uppgift3.implementation.LadokServiceImplementation;
import dev.uppgift3.model.LadokResult;
import dev.uppgift3.repository.LadokRepository;
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
    @Autowired
    private LadokRepository ladokRepository;

    //TODO: Metod för att uppdatera resultat via frontend behövs. Alltså, när man klickar på ett fält i datagriden -> ändrar -> klickar på "överför",
    //      så ska den metoden kallas för att updatera resultat i databasen


    //End point for reg_Resultat (used for adding new results)
    @RequestMapping("/reg_Resultat")
    public List<String[]> reg_Resultat(@RequestParam(value = "listOfResults[]") String[] listOfResults) {
        List<String[]> arrList = new ArrayList<String[]>();
        arrList.add(listOfResults);

        List<String> updateResult = new ArrayList<>();
        //TODO: loopa genom listOfResults på något sätt för att kunna lägga till ett nytt resultat med de värden som finns
        //TODO: inuti objekten som finns i listOfResult (dvs det som skickas från Datagriden till backend)


        //LadokResult newResult = ladokServiceImplementation.reg_Result(updateResult[0], updateResulta[1] osv...);



        return null;
    }

    //End point for requesting all results based on course code
    @RequestMapping(value="/find_Resultat", method = RequestMethod.GET)
        public @ResponseBody List<LadokResult> getResultsCourse(@RequestParam("courseCode") String courseCode) {
        List<LadokResult> listForCourse = ladokRepository.getResultsCourse(courseCode);
        return listForCourse;
    }

}
