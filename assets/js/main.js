let menu = document.getElementsByClassName("menu")[0];
let navMenu = document.getElementsByClassName("navmenu")[0];
let x = document.querySelector(".fa-x");

menu.addEventListener("click", () => {
    navMenu.style.display = "flex";
});

x.addEventListener("click", () => {
    navMenu.style.display = "none";
});
