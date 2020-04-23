// student score, total possible score
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function(score = 0, total = 0){
    let persent = (score / total) * 100
    let grade = "F"
    if(persent >=60 && persent <= 69){
        grade = "D"
    }
    else if(persent >= 70 && persent <= 79){
        grade = "C"
    }
    else if(persent >= 80 && persent <= 89){
        grade = "B"
    }
    else if(persent >= 90){
        grade = "A"
    }
    return `You got a ${grade}, (${persent}%) !`
}

