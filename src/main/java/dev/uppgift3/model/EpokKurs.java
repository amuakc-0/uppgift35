package dev.uppgift3.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EpokKurs {
   private @Id
   String courseCode;

   String courseName;

   public EpokKurs(String courseCode, String courseName) {
      this.courseCode = courseCode;
      this.courseName = courseName;
   }

   public EpokKurs() {

   }

   public String getCourseCode() {
      return courseCode;
   }

   public void setCourseCode(String courseCode) {
      this.courseCode = courseCode;
   }

   public String getCourseName() {
      return courseName;
   }

   public void setCourseName(String courseName) {
      this.courseName = courseName;
   }

   @Override
   public String toString() {
      return "EpokKurs{" +
              "courseCode='" + courseCode + '\'' +
              ", courseName='" + courseName + '\'' +
              '}';
   }
}
