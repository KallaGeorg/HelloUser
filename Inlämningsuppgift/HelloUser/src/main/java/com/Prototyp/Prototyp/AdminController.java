package com.Prototyp.Prototyp;



import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class AdminController {
   
    @GetMapping("/admin")
    public String getAdmin(){
        return("admin");
    }
    @GetMapping("/notSigned")
    public String getNotSigned(){
        return("notSigned");
    }
 
  

    
}
