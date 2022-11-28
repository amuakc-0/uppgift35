package dev.uppgift3.control;

import dev.uppgift3.implementation.LadokModulServiceImplementation;
import dev.uppgift3.implementation.LadokServiceImplementation;
import dev.uppgift3.model.EpokModul;
import dev.uppgift3.model.LadokModul;
import dev.uppgift3.model.LadokResult;
import dev.uppgift3.repository.LadokModulRepository;
import dev.uppgift3.repository.LadokRepository;
import dev.uppgift3.service.LadokModulService;
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
    @Autowired
    private LadokModulRepository ladokModulRepository;
    @Autowired
    private LadokModulServiceImplementation ladokModulServiceImplementation;

    //TODO: Metod för att uppdatera resultat via frontend behövs. Alltså, när man klickar på ett fält i datagriden -> ändrar -> klickar på "överför",
    //      så ska den metoden kallas för att updatera resultat i databasen


    //End point for reg_Resultat (used for adding new results)
    @RequestMapping("/reg_Resultat")
    public List<String[]> reg_Resultat(@RequestParam(value = "listOfResults[]") String[] listOfResults) {

            //{"ladokid":1,"pnr":"1987-03-20","kurskod":"D0032N","modul":"1002","betyg":"Ge","status":"utkast","datum":"2022-01-22"}
            List<String> values = new ArrayList<String>();

            for(int i = 0; i < listOfResults.length; i++) {
                String s = listOfResults[i];
                String result = s.replaceAll("\"", "");
                String[] sList = result.split("[:}]");
                System.out.println(sList[1]);
                values.add(sList[1]);

            }

            //Adding new result
        String pnr = values.get(1);
        String kurskod = values.get(2);
        String modul = values.get(3);
        String betyg = values.get(6); //6
        String status = values.get(5);
        String examinationsDatum = values.get(4); //4
        ladokServiceImplementation.reg_Result(pnr, kurskod, modul, examinationsDatum, betyg, status);
            //TODO: splitta igen för att få värdena på varsin plats i en array för att kunna skicka till metoden för att skapa ett nytt resultat
            //TODO: alltså... LadokResult newResult = ladokServiceImplementation.reg_Result(array[0], [1] osv...)




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

    @RequestMapping(value="/find_Modules", method = RequestMethod.GET)
    public @ResponseBody List<LadokModul> get_Modules(@RequestParam("courseCode") String courseCode) {
        List<LadokModul> modulesForCourse = ladokModulServiceImplementation.find_Modules(courseCode);
        return modulesForCourse;
    }

}
