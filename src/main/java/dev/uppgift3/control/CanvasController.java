package dev.uppgift3.control;

import dev.uppgift3.implementation.CanvasServiceImplementation;
import dev.uppgift3.model.CanvasStudent;
import dev.uppgift3.model.ItsPnr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/canvas")
@CrossOrigin
public class CanvasController {

    @Autowired
    CanvasServiceImplementation canvasServiceImplementation;

    @RequestMapping(value="/find", method = RequestMethod.GET)
    public @ResponseBody List<CanvasStudent> get_Students(@RequestParam("kurskod") String kurskod) {
        List <CanvasStudent> studenter = canvasServiceImplementation.find_Student(kurskod);
        System.out.println("CanvasStudent");
        return studenter;
    }
}
