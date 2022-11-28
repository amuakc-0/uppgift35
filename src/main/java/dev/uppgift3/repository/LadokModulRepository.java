package dev.uppgift3.repository;

import dev.uppgift3.model.EpokKurs;
import dev.uppgift3.model.EpokModul;
import dev.uppgift3.model.ItsPnr;
import dev.uppgift3.model.LadokModul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LadokModulRepository extends JpaRepository <LadokModul, Integer>{

    @Query(value = "select * from ladok_modul where kurs_kod like :courseCode", nativeQuery = true)
    List<LadokModul> findByCourseCode(@Param("courseCode") String courseCode);
}
