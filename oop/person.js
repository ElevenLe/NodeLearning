// Prototypal Inheritance

class Person{
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })
         return bio
    }
    set fullname(){
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }


}

class Employee extends Person{
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }
    getBio(){
        return `${this.fullname} is a ${this.position}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, grade, likes){
        super(firstName,lastName,age,likes)
        this.grade = grade
    }
    getBio(){
        if(this.grade > 70){
            `${this.lastName} pass`
        }
        else{
            `${this.lastName} fail`
        }
    }
    updateGrade(change){
        this.grade += change
    }
}

const me = new Student("Andrew", 'mead', 27,88,[])
me.fullname = "Clancey Turner"