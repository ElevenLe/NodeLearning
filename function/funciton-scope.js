// Global Scope ()

let covertFtoCe = function(f) {
    let ce = (f-31) * 5 / 9

    if (ce <= 0){
        let isFreezing = true
    }

    return ce
}


let tempOne = covertFtoCe(32)
let tempTwo = covertFtoCe(84)

let name = 'Jan'
console.log(`Hey, my name is ${name}!`) 