let loggInName= document.getElementById("loggInName");
let loggInPassword= document.getElementById("loggInPassword");
let loggInBtn = document.getElementById("loggInBtn");
let admin = false;

loggInBtn.addEventListener("click", ()=>{
if(loggInName.value == "admin" && loggInPassword.value == "admin"){
    
    localStorage.setItem("key1",loggInName.value)
    localStorage.setItem("key2",loggInPassword.value)
    window.location.href="admin";
    loggInName.value="";
    loggInPassword.value="";

}
else{
    window.location.href="notSigned";  
    loggInName.value="";
    loggInPassword.value="";
         
        }
});

if(localStorage.getItem("key1")=="admin" && localStorage.getItem("key2")== "admin"){
    admin = true;
    window.location.href="admin"; 
}
else{
    admin = false;
}


   
    
            
        
        
        
    
    
 
       
   
    
    
       
       
        
        
    
    
   
 
 
    
   
    

    



  

  

    
