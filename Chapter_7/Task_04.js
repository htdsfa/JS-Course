const color = ["green"];
color.unshift("blue");
color.push("red");

for (let i = 0; i < color.length; i++) {
  console.log(`Mój ulubiony kolor: ${color[i].toUpperCase()}`);
}
