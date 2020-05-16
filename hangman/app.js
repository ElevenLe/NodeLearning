const game1 = new Hangman('Cat', 2)

const renderHangman = function(){
    const showDiv = document.querySelector('#guesspage')
    showDiv.innerHTML = ""
    const guess = document.createElement('p')
    const guessRemaining = document.createElement('p')
    guess.textContent = game1.puzzle
    guessRemaining.textContent = game1.statusMessage
    showDiv.appendChild(guess)
    showDiv.appendChild(guessRemaining)
}

window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    renderHangman()
})

renderHangman()