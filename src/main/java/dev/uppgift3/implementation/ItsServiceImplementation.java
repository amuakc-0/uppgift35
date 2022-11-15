package dev.uppgift3.implementation;

import dev.uppgift3.model.ItsPnr;
import dev.uppgift3.repository.ItsRepository;
import dev.uppgift3.service.ItsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItsServiceImplementation implements ItsService {

    @Autowired
    ItsRepository itsRepository;

    //Method for seraching for a pnr in DB based on student-id (studentAnvandare)
    @Override
    public ItsPnr get_Persnummer(String studentAnvandare) {
        return itsRepository.get_Persnummer(studentAnvandare);
    }
}
