package dev.uppgift3.repository;

import dev.uppgift3.model.ItsPnr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItsRepository extends JpaRepository <ItsPnr, Integer> {

    //This class will only be needed if we use JPA instead of JDBC (look into security issues)
    @Query(value = "select * from its_pnr where student_anvandare like %:studentAnvandare%", nativeQuery = true)
    ItsPnr get_Persnummer(@Param("studentAnvandare") String studentAnvandare);
}
