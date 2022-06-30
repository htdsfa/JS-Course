let celsius;
let temp;
const fahrenheit = (x) => {
  celsius = x;
  temp = celsius * 1.8 + 32;
  console.log(`${celsius}°C = ${temp}°F`);
};
fahrenheit(20);
