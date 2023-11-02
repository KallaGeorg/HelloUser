package com.Prototyp.Prototyp;



import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class AdminController {
   
    @GetMapping("/admin2")
    public String getAdmin(){
        return("admin2");
    }
  

    
}
