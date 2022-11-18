package dev.uppgift3.repository;

import dev.uppgift3.model.LadokResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LadokRepository extends JpaRepository <LadokResult, Integer> {
    @Query(value = "select * from ladok_result where kurskod like %:courseCode%", nativeQuery = true)
    List<LadokResult> getResultsCourse(@Param("courseCode") String courseCode);


    //This class will only be needed if we use JPA instead of JDBC (look into security issues)
}
