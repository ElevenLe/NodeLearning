const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split(' ')
    this.remainingGuesses = remainingGuesses
    this.guessLatter = ["c"]
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

const game1 = new Hangman('Cat', 2)

const game2 = new Hangman("City", 4)