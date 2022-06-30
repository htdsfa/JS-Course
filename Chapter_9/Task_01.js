const ulList = document.createElement("ul");
document.body.appendChild(ulList);

for (let i = 1; i <= 10; i++) {
  const liItem = document.createElement("li");
  liItem.textContent = i;
  ulList.appendChild(liItem);
}

const lastLi = ulList.querySelector("li:last-child");
lastLi.textContent = "Jestem ostatnim elementem";

lastLi.style.backgroundColor = "blue";
lastLi.style.padding = "20px 40px";
lastLi.style.fontSize = "48px";
