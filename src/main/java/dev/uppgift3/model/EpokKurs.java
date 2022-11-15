package dev.uppgift3.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EpokKurs {
   private @Id
   String courseCode;

   String courseName;


}
