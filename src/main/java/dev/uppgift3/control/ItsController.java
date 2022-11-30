package dev.uppgift3.control;

import dev.uppgift3.implementation.ItsServiceImplementation;
import dev.uppgift3.model.ItsPnr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/its")
@CrossOrigin //TODO: specify headers etc for better security
public class ItsController {

    @Autowired
    private ItsServiceImplementation itsServiceImplementation;

    //End-point for get_Persnummer. Requests data needed for finding a ItsPnr object.

    //method= RequestMethod.GET
    @RequestMapping(value="/find", method = RequestMethod.GET)
    public @ResponseBody String get_Persnummer(@RequestParam("studentAnvandare") String studentAnvandare) {
        String pnr = itsServiceImplementation.get_Persnummer(studentAnvandare);
        return pnr;
    }

}
