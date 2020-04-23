let myAccount = {
    name : 'FIRST',
    expenses: 0,
    income : 0
}

let otherAccount = myAccount
otherAccount.income = 1000
console.log(otherAccount)

otherAccount = {}
console.log(otherAccount)
console.log(myAccount)


let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function(account, amount){
    account.income = account.income + amount
}

// resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function(account){
    return `Account summary: ${account.name} has expense ${account.expenses} + and income ${account.income}`
}


console.log(getAccountSummary(myAccount))