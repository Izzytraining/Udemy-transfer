class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = []
    this.status = 'playing'
  }
getStatus() {

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

getStatusMessage() {
  if(this.status === 'playing') {
    return `Remaining guesses: ${this.remainingGuesses}`
  } else if (this.status === 'failed') {
    return `Nice try! The word was "${this.word.join('')}"`
  } else  {
    return `Great work, you guessed the word!`
  }
}

getPuzzle() {  
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

  makeGuess(guess){
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
  
  }

}

