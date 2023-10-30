package com.Prototyp.Prototyp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LogginController {
    @GetMapping("/")
    public String loggIn(){
        return"loggin";
    }
    
}
