let add = function(a, b) {
    return a + b
}

let result = add(undefined, 1)
console.log(result)

// Deafult arg 
let getScoreText = function(name, score = 0){
    console.log(name)
    console.log(score)
}

getScoreText(undefined,undefined)

let getTip = function(cost = 0, percent = 0.18){
    return cost * (1+percent)
}

console.log(getTip(8,0.20))