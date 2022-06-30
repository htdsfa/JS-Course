const up = document.querySelector(".sizeUp");
const down = document.querySelector(".sizeDown");
const color = document.querySelector(".color");
const p = document.querySelector("p");
let fontSize = 36;

const increase = () => {
  fontSize += 2;
  p.style.fontSize = fontSize + "px";
};

const decrease = () => {
  if (fontSize < 10) {
    return;
  }
  fontSize -= 2;
  p.style.fontSize = fontSize + "px";
};
const colorChange = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  p.style.color = `rgb(${r},${g},${b}`;
};

down.addEventListener("click", decrease);
up.addEventListener("click", increase);
color.addEventListener("click", colorChange);
