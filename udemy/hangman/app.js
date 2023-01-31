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

//making an http request

getPuzzle("2").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

// /////////////////////////
getCountry("GB").then(
  (country) => {
    console.log(country.name);
  },
  (error) => {
    console.log(`Error: ${error}`);
  }
);

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`Country name: ${country.name}`);
//   }
// });
