let game1
const puzzleElement = document.querySelector("#puzzle")
const guessElement = document.querySelector("#guesses")
const renderHangman = function(){
    puzzleElement.innerHTML = ""
    guessElement.textContent = game1.statusMessage
    
    
    game1.puzzle.split('').forEach((w) => {
        const char = document.createElement("span")
        char.textContent = w
        puzzleElement.appendChild(char)
    })
}

window.addEventListener('keypress',(e) =>{
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    renderHangman()
})

const startGame = async () => {
    const puzzle = await getPuzzleAsync('2')
    game1 = new Hangman(puzzle, 5)
    renderHangman()
}

document.querySelector("#reset").addEventListener('click', startGame)

startGame()
// getPuzzleAsync("2").then((puzzle) => {
//     console.log(puzzle)
// }, (err) =>{
//     console.log(`error : ${err}`)
// })



// getCurrentCountry().then((country) => {
//     console.log(country)
// }).catch((err) => {
//     console.log(err)
// })

// getCountryCallback("US", (error, country) =>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(country)
//     }
// })


// const countryCode = "US"

// getCountryP1("US").then((name) => {
//     console.log(name)
// }, (err) => {
//     console.log(`err is ${err}`)
// })

// getCountry("US").then((name) => {
//     console.log(name)
// }, (err) =>{
//     console.log(err)
// })

// getLocationAsync().then((location) => {
//     return getCountryAsync(location.country)
// }).then((countryCode)=> {
//     console.log(countryCode)
// }).catch((error) => {
//     console.log(error)
// })

// using fetch to run
// fetch return a promises
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200){
//         return response.json()
//     }else{
//         throw new Error("unable to fetch the puzzle")
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })