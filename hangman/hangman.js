// create a method for making a guess
// 1. should accept a character for guessing
// 2. should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't match
const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split(' ')
    this.remainingGuesses = remainingGuesses
    this.guessLatter = []
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((w) => {
        if(this.guessLatter.includes(w) || w === ' '){
            puzzle += w
        }
        else{
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.guess = function(guess){
    unique_guess = new Set
    guess.forEach((w) => {
        unique_guess.add(w)
    })
    unique_guess.forEach((w) =>{
        this.guessLatter.push(w)
    })
    if(this.getPuzzle() !== this.word){
        this.remainingGuesses -= 1
    }
}

const game1 = new Hangman('Cat', 2)
game1.guess(['c','t','z'])
console.log(game1.guessLatter)
console.log(game1.getPuzzle())

const game2 = new Hangman("City", 4)