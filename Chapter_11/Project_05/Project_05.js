const burgerBtn = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");

const handleNav = () => {
  nav.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  bars.classList.toggle("hide");
  xIco.classList.toggle("hide");
};

burgerBtn.addEventListener("click", handleNav);
