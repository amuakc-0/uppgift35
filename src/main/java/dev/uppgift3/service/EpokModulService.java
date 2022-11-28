package dev.uppgift3.service;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.EpokModul;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EpokModulService {

 //Method for returning modules for a specific course code
    public List<EpokModul> find_Modules(String courseCode);
}
