package dev.uppgift3.repository;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.ItsPnr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpokRepository extends JpaRepository <EpokKurs, Integer>{

    @Query(value = "select * from epok_kurs", nativeQuery = true)
    List<EpokKurs> get_Kurser() ;
}
