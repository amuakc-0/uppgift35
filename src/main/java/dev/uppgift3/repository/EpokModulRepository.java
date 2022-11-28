package dev.uppgift3.repository;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.EpokModul;
import dev.uppgift3.model.ItsPnr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpokModulRepository extends JpaRepository <EpokModul, Integer>{

    @Query(value = "select * from epok_modul where kurs_kod like :courseCode", nativeQuery = true)
    List<EpokModul> findByCourseCode(@Param("courseCode") String courseCode);
}
