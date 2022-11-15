package dev.uppgift3.control;

public class EpokController {

    /* get_Modul
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
