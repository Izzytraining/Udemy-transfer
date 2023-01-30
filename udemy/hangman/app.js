const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman("Expanse", 8);


puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()


//Manual guesses
// game1.makeGuess('c')
// game1.makeGuess('p')
// game1.makeGuess('b')
  


// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses)
// console.log(game1.status)

window.addEventListener('keypress', function (e){
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent = game1.getStatusMessage()
  
//   console.log(game1.getPuzzle());
//   console.log(game1.remainingGuesses)
//   console.log(game1.status)
})

