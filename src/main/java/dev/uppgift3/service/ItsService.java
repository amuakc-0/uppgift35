package dev.uppgift3.service;

import dev.uppgift3.model.ItsPnr;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItsService {

    //Method for returning Pnr, requesting student-ID
    public String get_Persnummer(String studentAnvandare);

}
