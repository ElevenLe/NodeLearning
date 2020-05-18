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

window.addEventListener('keypress',(e) =>{
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    renderHangman()
})

renderHangman()


getPuzzle().then((puzzle) => {
    console.log(puzzle)
}, (err) =>{
    console.log(`error : ${err}`)
})


getCountryCallback("US", (error, country) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log(country)
    }
})


// const countryCode = "US"

getCountry("US").then((name) => {
    console.log(name)
}, (err) => [
    console.log(`err is ${err}`)
])