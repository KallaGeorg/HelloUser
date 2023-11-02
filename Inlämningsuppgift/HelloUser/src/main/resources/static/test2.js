if(localStorage.getItem("key1")=="admin"&&localStorage.getItem("key2")=="admin"){
    /*const adminside = document.createElement("h1");
    adminside.textContent="Adminsida";
    document.body.appendChild(adminside);

   let br = document.createElement("BR");
    document.body.appendChild(br);
    const createMember = document.createElement("a");
    createMember.textContent="Lägg till Medlemmar";
    createMember.href="/createMember";
    document.body.appendChild(createMember);
    
    let br2 = document.createElement("BR");
    document.body.appendChild(br2);
    const deleteMember = document.createElement("a");
    deleteMember.textContent="Visa och radera Medlemmar";
    deleteMember.href="/showList";
    document.body.appendChild(deleteMember);*/
}
else{
    const message = document.createElement("h1");
    const remover = document.getElementById("adminContent");
    remover.remove();
    message.textContent="Du är inte admin!";
    document.body.appendChild(message);

    const link = document.createElement("a");
    link.textContent="Länk till loggin";
    link.href="/";
    document.body.appendChild(link);
}
