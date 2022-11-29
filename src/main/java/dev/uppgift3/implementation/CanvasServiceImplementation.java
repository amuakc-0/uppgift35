package dev.uppgift3.implementation;

import dev.uppgift3.model.CanvasStudent;
import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.ItsPnr;
import dev.uppgift3.repository.CanvasRepository;
import dev.uppgift3.repository.ItsRepository;
import dev.uppgift3.service.CanvasService;
import dev.uppgift3.service.ItsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CanvasServiceImplementation implements CanvasService {

    @Autowired
    CanvasRepository canvasRepository;


    @Override
    public List<CanvasStudent> find_Student(String kurskod) {
        return canvasRepository.findStudentByCourseCode(kurskod);
    }
}
