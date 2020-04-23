// Undefined for variable
let name

if(name === undefined){
    console.log("please give a name")
}else{
    console.log(name)
}


// undefined for function arguments
let square = function(num){
    console.log(num)
}

let result = square()

console.log(result)