package dev.uppgift3.service;

import dev.uppgift3.model.EpokKurs;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EpokService {

    public List<EpokKurs> get_Kurser();
}
