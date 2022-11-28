package dev.uppgift3.implementation;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.EpokModul;
import dev.uppgift3.model.LadokModul;
import dev.uppgift3.repository.EpokModulRepository;
import dev.uppgift3.repository.EpokRepository;
import dev.uppgift3.repository.LadokModulRepository;
import dev.uppgift3.service.EpokModulService;
import dev.uppgift3.service.EpokService;
import dev.uppgift3.service.LadokModulService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LadokModulServiceImplementation implements LadokModulService {

    @Autowired
    private LadokModulRepository ladokModulRepository;


    @Override
    public List<LadokModul> find_Modules(String courseCode) {
        return ladokModulRepository.findByCourseCode(courseCode);
    }
}
