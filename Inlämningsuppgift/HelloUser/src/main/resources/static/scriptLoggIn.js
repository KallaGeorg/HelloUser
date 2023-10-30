let loggInName= document.getElementById("loggInName");
let loggInPassword= document.getElementById("loggInPassword");
let loggInBtn1 = document.getElementById("loggInBtn1");
let loggInBtn2 = document.getElementById("loggInBtn2");


let admin = false;
    loggInBtn1.addEventListener("click", ()=>{
        localStorage.setItem("key1", loggInName.value.toLowerCase())
    });
    loggInBtn2.addEventListener("click", ()=>{
        localStorage.setItem("key2",loggInPassword.value.toLowerCase())
    });
    
   
    if(localStorage.getItem("key1") == "admin" && localStorage.getItem("key2") == "admin"){
        admin = true;
        let link = document.createElement("a");
        link.innerText = "Adminsida";
        link.href="/admin";
        document.body.appendChild(link);
        
        
    }
    else{
        admin = false;
        
    }
   // refreshBtn.addEventListener("click", () =>{ });
    
   
    

    


//else{
 //   admin = false;
//}

  

  

    
