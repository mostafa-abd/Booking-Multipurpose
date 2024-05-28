let menu = document.getElementsByClassName("menu")[0]
    navMenu = document.getElementsByClassName("navmenu")[0]
    x = document.getElementsByClassName("fa-x")[0];

menu.addEventListener("click" , ()=> navMenu.style.display = "flex");
x.addEventListener("click" , ()=> navMenu.style.display = "none");