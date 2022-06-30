const img = document.querySelector("img");
img.setAttribute(
  "src",
  "http://www.polskieradio.pl/10/5366/Artykul/2653987,Kot-ktory-cie-kocha-mowi-jezykiem-przeznaczonym-specjalnie-dla-ciebie"
);
img.setAttribute("alt", "Obrazek");
const pizza = () => {
  console.log("Pizza!");
};
setTimeout(pizza, 2000);
