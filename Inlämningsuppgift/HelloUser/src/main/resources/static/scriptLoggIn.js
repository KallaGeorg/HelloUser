let loggInName= document.getElementById("loggInName");
let loggInPassword= document.getElementById("loggInPassword");
let loggInBtn = document.getElementById("loggInBtn");
let loggOutBtn = document.getElementById("loggOutBtn");
//let adminContent = document.getElementById("adminContent");

let admin = false;
loggInBtn.addEventListener("click", ()=>{
if(loggInName.value == "admin" && loggInPassword.value == "admin"){
    
    localStorage.setItem("key1",loggInName.value)
    localStorage.setItem("key2",loggInPassword.value)
}
loggInName.value="";
loggInPassword.value="";
if(localStorage.getItem("key1")=="admin" && localStorage.getItem("key2")== "admin"){
    admin = true;
    window.location.href="admin";
   
   

}
else{
    admin = false;
}

});
//const test = document.createElement("h1");
//test.textContent="Test";
//document.body.appendChild(test);


    //window.location.href="/";

   
    
            
        
        
        
    
    
   // if(admin){
       
       
        //window.location.replace("/");

   // }
        
    
    
       
       
        
        
    
    
   
 
 
    
   
    

    



  

  

    
