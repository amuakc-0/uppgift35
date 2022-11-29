package dev.uppgift3.repository;

import dev.uppgift3.model.CanvasStudent;
import dev.uppgift3.model.ItsPnr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CanvasRepository extends JpaRepository <CanvasStudent, Integer> {

    //This class will only be needed if we use JPA instead of JDBC (look into security issues)

    //Query to DB for searching for a pnr based on student-id (studentAnvandare)
    @Query(value = "select * from canvas_student where kurs like %:kurskod%", nativeQuery = true)
    List<CanvasStudent> findStudentByCourseCode(@Param("kurskod") String kurskod);
}
