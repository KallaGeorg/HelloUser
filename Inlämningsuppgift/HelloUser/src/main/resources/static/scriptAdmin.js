if(localStorage.getItem("key1")=="admin"&&localStorage.getItem("key2")=="admin"){
    const visa = document.getElementById("adminContent");
    visa.style.visibility="visible";
   
}
else{
    const message = document.createElement("h1");
    const message2 = document.createElement("h3");
    const remover = document.getElementById("adminContent");
    remover.remove();
    message.textContent="Du är inte admin!";
    document.body.appendChild(message);
    message2.textContent = "Det här är en demoversion, bara admin kan logga in!";
    message2.style.color = "red";
    document.body.appendChild(message2);

    const link = document.createElement("a");
    link.textContent="Länk till loggin";
    link.href="/";
    document.body.appendChild(link);
}
