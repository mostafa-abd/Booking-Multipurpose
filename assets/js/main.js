let menu = document.getElementsByClassName("menu")[0]
    navMenu = document.getElementsByClassName("navmenu")[0]
    x = document.querySelector(".close")

menu.addEventListener("click" , ()=> navMenu.classList.add("d-f"));
x.addEventListener("click" , ()=> navMenu.classList.remove("d-f") );