const account = {
    name: "Zhengyi Li",
    expenses: [],
    addExpense : function (stuff, amount) {
        let expense = {
            description : stuff,
            amount: amount
        }
        this.expenses.push(expense)
    },
    income: [],
    addIncome: function (stuff, amount) {
        this.income.push({
            description: stuff,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpense = 0
        this.expenses.forEach(function(expense) {
            totalExpense += expense.amount
        })
        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })

        const total = totalIncome - totalExpense

        return `${this.name} has a balance of ${total}. ${totalExpense} in expenses. ${totalIncome} in income`
    }

}

// Expense -> description, amount


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome("job", 1000)
console.log(account.getAccountSummary())