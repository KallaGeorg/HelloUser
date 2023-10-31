let loggInName= document.getElementById("loggInName");
let loggInPassword= document.getElementById("loggInPassword");
let loggInBtn = document.getElementById("loggInBtn");


let admin = false;
    loggInBtn.addEventListener("click", ()=>{
        localStorage.setItem("key1", loggInName.value.toLowerCase())
        localStorage.setItem("key2",loggInPassword.value.toLowerCase())
    });
   
    if(localStorage.getItem("key1") == "admin" && localStorage.getItem("key2") == "admin"){
        admin = true;
        
        let link = document.createElement("a");
        
        link.innerText = "Adminsida";
        link.id = "adminLink";
        link.href="/admin";
        link.style.color="red";
        
        document.body.appendChild(link);
        
        
    }
    else{
        admin = false;
        
    }
 
    
   
    

    



  

  

    
