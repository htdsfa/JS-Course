const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const square = document.querySelector(".square");
const hello = () => {
  console.log("cześć");
};
const color1 = () => {
  square.style.background = "red";
};
const color2 = () => {
  square.style.background = "blue";
};
const lightSwitch = () => {
  p1.classList.toggle("show");
  p2.classList.toggle("show");
};
btn1.addEventListener("dbclick", hello);
square.addEventListener("mouseenter", color1);
square.addEventListener("mouseleave", color2);
btn2.addEventListener("click", lightSwitch);
