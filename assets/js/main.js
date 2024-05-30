let menu = document.querySelector(".menu");
let navMenu = document.querySelector(".navmenu");
let closeBtn = document.querySelector(".close");

menu.addEventListener("click", () => navMenu.classList.add("d-f"));
closeBtn.addEventListener("click", () => navMenu.classList.remove("d-f"));

