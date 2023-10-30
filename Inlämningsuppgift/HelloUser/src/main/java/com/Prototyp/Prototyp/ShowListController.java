package com.Prototyp.Prototyp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ShowListController {
 

@GetMapping("/showList")
public String getList(Model model){
    model.addAttribute("nameList", MedlemController.medlemmar);
    return "showList";
}

@GetMapping("/remove-member/{memberID}")
public String removeMember(@PathVariable int memberID){
    MedlemController.medlemmar.removeIf(item -> item.getId() == memberID);
    return"redirect:/showList";
     
    }
}


 
    

 
