const Hangman = function (word, guesses) {
  this.word = word;
  this.guesses = guesses;
};

const game1 = new Hangman("Cat", 2);
console.log(game1);

const game2 = new Hangman("Fish", 3);
console.log(game2);
