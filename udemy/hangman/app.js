const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Conscious", 11);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

//Manual guesses
// game1.makeGuess('c')
// game1.makeGuess('p')
// game1.makeGuess('b')

// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses)
// console.log(game1.status)

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;

  //   console.log(game1.getPuzzle());
  //   console.log(game1.remainingGuesses)
  //   console.log(game1.status)
});
