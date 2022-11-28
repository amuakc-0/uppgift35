package dev.uppgift3.implementation;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.EpokModul;
import dev.uppgift3.repository.EpokModulRepository;
import dev.uppgift3.repository.EpokRepository;
import dev.uppgift3.service.EpokModulService;
import dev.uppgift3.service.EpokService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EpokModulServiceImplementation implements EpokModulService {

    @Autowired
    private EpokModulRepository epokModulRepository;


    @Override
    public List<EpokModul> find_Modules(String courseCode) {
       return epokModulRepository.findByCourseCode(courseCode);
    }
}
