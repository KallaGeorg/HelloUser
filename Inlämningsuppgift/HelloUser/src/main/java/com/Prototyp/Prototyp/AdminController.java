package com.Prototyp.Prototyp;



import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


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
    @GetMapping("/")
    public String loggIn(){
        return"loggin";
    }
    
        static final List<Medlem> medlemmar = new ArrayList<>();
    static{
      medlemmar.add(new Medlem("Petra","Member1","@solidmember1.com",1));
      medlemmar.add(new Medlem("Jimmy","Member2","@solidmember2.com",2));
      medlemmar.add(new Medlem("Hanni","Member3","@solidmember3.com",3));
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
    @GetMapping("/onlyList")
    public String onlyList(Model model){
        model.addAttribute("nameList",medlemmar);
        return"onlyList";
    }
            
    @GetMapping("/showList")
public String getList(Model model){
    model.addAttribute("nameList", medlemmar);
    return "showList";
}

@GetMapping("/remove-member/{memberID}")
public String removeMember(@PathVariable int memberID){
    medlemmar.removeIf(item -> item.getId() == memberID);
    return"redirect:/showList";
     
    }
    
 
  

    
}
