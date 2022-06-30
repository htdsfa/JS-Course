const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const password = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "Masz bardzo mocne hasło";
  } else if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "Masz mocne hasło";
  } else {
    p.textContent = "Masz słabe hasło";
  }
};
const passBox = () => {
  if (pass.value !== "") {
    password();
  } else {
    p.textContent = "Nie podałeś hasła...";
  }
};
pass.addEventListener("keyup", passBox);
