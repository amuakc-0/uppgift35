package dev.uppgift3.control;

import dev.uppgift3.implementation.EpokServiceImplementation;
import dev.uppgift3.model.EpokKurs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/epok")
@CrossOrigin //specify headers etc. for higher security, allows all if not

public class EpokController {

    @Autowired
    private EpokServiceImplementation epokServiceImplementation;


    @RequestMapping(value="/find", method = RequestMethod.GET)
    public @ResponseBody List<EpokKurs> get_Kurser()  {
        List<EpokKurs> list = epokServiceImplementation.get_Kurser();
        return list;
    }

    /* get_Kurser
        - tar emot: inget
        - returnerar alla kurser

        get_Modul
        Tar emot: String kurskod = "D0031N"
        returnerar: List <Moduler> moduler

        Vilka objekt behövs?
        - Kurs (kursnamn, kurskod)
        - Modul (modulnamn, modulkod)

        TODO:
        - Skapa två nya entiter Kurs och Modul (i praktiken blir detta som två tabeller i databasen, en "kurs"- och en "modul"-tabell)
        - Varje Kurs måste ha en samling Moduler (dvs. en List<Modul> moduler). Alltså:
          kolla upp hur man gör en join mellan Kurs och Modul baserat på kurskod i Spring
          (t.ex. Map modules https://thorben-janssen.com/ultimate-guide-association-mappings-jpa-hibernate/)
        -
     */
}
