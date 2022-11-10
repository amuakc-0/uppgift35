package dev.uppgift3.repository;

import dev.uppgift3.model.LadokResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LadokRepository extends JpaRepository <LadokResult, Integer> {

    //This class will only be needed if we use JPA instead of JDBC (look into security issues)
}
