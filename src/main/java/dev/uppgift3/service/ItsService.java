package dev.uppgift3.service;

import dev.uppgift3.model.ItsPnr;
import org.springframework.stereotype.Service;

@Service
public interface ItsService {

    //Method for returning Pnr, requesting student-ID
    public ItsPnr get_Persnummer(String studentAnvandare);

}
