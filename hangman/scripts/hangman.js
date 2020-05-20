class Hangman{
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessLatter = []
        this.status = "playing"        
    }
    get puzzle(){
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
    guess(guess){
        if(this.status === "playing"){
            guess = guess.toLowerCase()
            const isUnique =!this.guessLatter.includes(guess)
            const isWrongGuess = !this.word.includes(guess)
    
            if(isUnique){
                this.guessLatter.push(guess)
            }
    
            if(isUnique && isWrongGuess){
                this.remainingGuesses --
            }
    
            this.calculateStatus()
            console.log(this.status)
        }
    }
    calculateStatus(){
        if(this.status === "playing"){
            if(this.remainingGuesses === 0 && this.puzzle.includes('*')){
                this.status = "failed"
            }
            else if(!this.puzzle.includes('*')){
                this.status = "finished"
            }
        }
    
        // const finished = this.word.every((letter) => this.guessLatter.includes(letter))
        // if(this.remainingGuesses === 0){
        //     this.status = 'failed'
        // }
        // else if(finished){
        //     this.status = "finished"
        // }
        // else{
        //     this.status = 'playing'
        // }
    }
    get statusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }
        else if(this.status === "finished"){
            return `Great work! You guessed the word`
        }
        else{
            return `Nice try! The word was "${this.word.join("")}"`
        }
    }
}


