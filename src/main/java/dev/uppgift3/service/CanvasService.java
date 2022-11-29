package dev.uppgift3.service;

import dev.uppgift3.model.CanvasStudent;
import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.ItsPnr;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CanvasService {

    //Method for returning Pnr, requesting student-ID
    public List<CanvasStudent> find_Student(String kurskod);

}
