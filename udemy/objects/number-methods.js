let num = 767.1;

console.log(num.toFixed());

let min = 10;
let max = 80;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);

let guess = function (guessing) {
  let min = 2;
  let max = 100;
  let randomGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  return guessing === randomGuess;
};

console.log(guess(11));
