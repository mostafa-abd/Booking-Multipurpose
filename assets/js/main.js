//navbar
let menu = document.getElementsByClassName("menu")[0];
navMenu = document.getElementsByClassName("navmenu")[0];
x = document.querySelector(".close");

menu.addEventListener("click", () => navMenu.classList.add("d-f"));
x.addEventListener("click", () => navMenu.classList.remove("d-f"));

//image slider
let imageSlider = document.getElementById("image-slider"),
listOfImages = [
  "assets/images/pv1.webp",
  "assets/images/pv2.webp",
  "assets/images/pv3.webp",
  "assets/images/pv5.webp",
],
currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % listOfImages.length;
  imageSlider.style.opacity = 0;
  setTimeout(() => {
    imageSlider.src = listOfImages[currentIndex];
    imageSlider.style.opacity = 1;
  }, 200);
}
setInterval(changeImage, 3000);
