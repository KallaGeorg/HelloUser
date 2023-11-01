package com.Prototyp.Prototyp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MedlemController {
    static final List<Medlem> medlemmar = new ArrayList<>();
    static{
      medlemmar.add(new Medlem("Solid","Member1","@solidmember.com",1));
      medlemmar.add(new Medlem("Solid","Member2","@solidmember.com",2));
      medlemmar.add(new Medlem("Solid","Member3","@solidmember.com",3));
  }
   
 @GetMapping("/createMember")
 public String getMember(Model model, String lname, String fname, String email){
    model.addAttribute("newMember", new Medlem("","","", 0));
     return "createMember";
 }
 @PostMapping("/new-member")
    public String newMemberInfo(@RequestParam("fname")String fname, @RequestParam("lname")String lname, @RequestParam("email")String email){
          medlemmar.add(new Medlem(fname,lname,email,medlemmar.size()+1));
       
          return"redirect:/createMember";
    }
            
    
 }

   


 
    
    
   

