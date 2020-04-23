const squareLong = (num) => {
    return num * num
}

const square = (num) => num * num

console.log(square(5))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Vikram',
    age: 31
},{
    name:'Jess',
    age: 22
}]

const under30 = people.filter((person) => person.age < 30)

const p22 = people.find((person) => person === 22)