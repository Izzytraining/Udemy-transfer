const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = []
  this.status = 'playing'
};

Hangman.prototype.getStatus = function () {

const finished = this.word.every((letter) => {
  return this.guessedLetters.includes(letter)
})

if (this.remainingGuesses === 0) {
  this.status = 'failed'
} else if (finished) {
  this.status = 'finished'
} else {
  this.status = 'playing'
}
}

Hangman.prototype.getStatusMessage = function () {
  if(this.status === 'playing') {
    return `Remaining guesses: ${this.remainingGuesses}`
  } else if (this.status === 'failed') {
    return `Nice try! The word was "${this.word.join('')}"`
  } else  {
    return `Great work, you guessed the word!`
  }
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

this.word.forEach((letter) => {
  if(this.guessedLetters.includes(letter) || letter === ' ' ) {
     puzzle += letter
  } else {
     puzzle += '*'
  }
});

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
const isUnique = !this.guessedLetters.includes(guess)
const isBadGuess = !this.word.includes(guess)

if (this.status !== 'playing') {
  return
}

  if (isUnique) {
    this.guessedLetters.push(guess)
    //pushing the guesses
  } 
  if (isUnique && isBadGuess) {
    //counts down the remaining guesses
    this.remainingGuesses--
  }

  this.getStatus()
} 

