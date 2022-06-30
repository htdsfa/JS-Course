const btnConv = document.querySelector(".conv");
const btnReset = document.querySelector(".reset");
const btnChange = document.querySelector(".change");
const result = document.querySelector(".result");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const converter = document.querySelector("#converter");

let celsius;
let fahrenheit;

const change = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
};
const convertCelToFah = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
  converter.value = "";
};
const convertFahToCel = () => {
  celsius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
  converter.value = "";
};
const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      convertFahToCel();
    } else {
      convertCelToFah();
    }
  } else {
    result.textContent = "Musisz podać wartość";
  }
};
const reset = () => {
  converter.value = "";
  result.textContent = "";
};
btnConv.addEventListener("click", conversion);
btnReset.addEventListener("click", reset);
btnChange.addEventListener("click", change);
