const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Conscious", 11);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;

  //   console.log(game1.remainingGuesses)
  //   console.log(game1.status)
});

// //making an http request

getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

////////////////////////////

getLocation()
  .then((location) => {
   return getCountry(location.country)
  }).then((country) => {
console.log(country.name)
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });