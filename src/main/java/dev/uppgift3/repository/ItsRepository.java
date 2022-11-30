package dev.uppgift3.repository;

import dev.uppgift3.model.ItsPnr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItsRepository extends JpaRepository <ItsPnr, Integer> {

    //This class will only be needed if we use JPA instead of JDBC (look into security issues)

    //Query to DB for searching for a pnr based on student-id (studentAnvandare)
    @Query(value = "select pnr from its_pnr where student_anvandare like %:studentAnvandare%", nativeQuery = true)
    String get_Persnummer(@Param("studentAnvandare") String studentAnvandare);
}
