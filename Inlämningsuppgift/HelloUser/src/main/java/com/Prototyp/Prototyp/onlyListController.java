package com.Prototyp.Prototyp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class onlyListController {
    @GetMapping("/onlyList")
    public String onlyList(Model model){
        model.addAttribute("nameList",MedlemController.medlemmar);
        return"onlyList";
    }
    
}
