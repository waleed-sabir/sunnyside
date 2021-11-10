const hamburgerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const dropdown = document.querySelector(".header__dropdown");
const fadeEl = document.querySelectorAll(".has-fade");
const body = document.querySelectorAll("body");

hamburgerMenu.addEventListener("click", function () {
  console.log("Open Hamburger Menu");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    dropdown.classList.remove("active");
    dropdown.classList.remove("fade-in");
    dropdown.classList.add("fade-out");
  } else {
    header.classList.add("open");
    dropdown.classList.add("active");
    dropdown.classList.remove("fade-out");
    dropdown.classList.add("fade-in");
  }
});
