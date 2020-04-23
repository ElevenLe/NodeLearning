const myAge = 27
let message = myAge >= 18 ? 'you can vote!' : 'You cannot vote'

const showPage = () =>{
    console.log('showing the page')
}

const showErrorPage = () => {
    console.log('showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : "too many people")