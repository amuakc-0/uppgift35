package dev.uppgift3.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EpokKurs {
   private @Id
   String value;

   String label;

   public EpokKurs(String value, String label) {
      this.value = value;
      this.label = label;
   }

   public EpokKurs() {

   }

   public String getValue() {
      return value;
   }

   public void setValue(String value) {
      this.value = value;
   }

   public String getLabel() {
      return label;
   }

   public void setLabel(String label) {
      this.label = label;
   }
}
