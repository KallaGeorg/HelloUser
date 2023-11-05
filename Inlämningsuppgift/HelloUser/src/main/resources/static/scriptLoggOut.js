let loggOutBtn = document.getElementById("loggOutBtn");
loggOutBtn.addEventListener("click", () =>{
localStorage.setItem("key1", null);
localStorage.setItem("key2", null);
window.location.href="/";
});


  