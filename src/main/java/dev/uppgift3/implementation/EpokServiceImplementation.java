package dev.uppgift3.implementation;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.repository.EpokRepository;
import dev.uppgift3.service.EpokService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EpokServiceImplementation implements EpokService {

    @Autowired
    EpokRepository epokRepository;
    @Override
    public List<EpokKurs> get_Kurser() {
        return epokRepository.findAll();
    }
}
