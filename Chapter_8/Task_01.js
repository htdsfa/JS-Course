let score;
const add = (x, y) => {
  score = x + y;

  if (score % 2 == 0) {
    even();
  } else {
    odd();
  }
};
const even = () => {
  console.log(`Liczba ${score} jest parzysta`);
};
const odd = () => {
  console.log(`Liczba ${score} jest nieparzysta`);
};

add(2, 5);
