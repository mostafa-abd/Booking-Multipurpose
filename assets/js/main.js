let menu = document.querySelector(".menu")
    navMenu = document.querySelector(".close>.material-symbols-outlined")
    x = document.querySelector(".close")

menu.addEventListener("click" , ()=> navMenu.classList.add("d-f"));
x.addEventListener("click" , ()=> navMenu.classList.remove("d-f") );
