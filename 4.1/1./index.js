const numbers = [];

for (let index = 0; index < 10; index++) {
  const randomNumber = Math.round(Math.random() * 10);
  numbers.push(randomNumber);
}

console.log(`Mis números son`, numbers);