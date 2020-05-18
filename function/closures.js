const createCounter = () =>{
    let count = 0

    return{
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const add = (a,b) => a + b
const createAdder = (a) =>{
    return(b) =>{
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 =  createAdder(100)
console.log(add100(-90))

// Tipper 
const createTipper = (tip) => {
    return(amount) => {
        tipsAmount = amount*tip
        return `you can give tip ${tipsAmount}`
    }
}
const tipper = createTipper(0.15)
console.log(tipper(90))
console.log(tipper(15))
const tipper2 = createTipper(0.18)
console.log(tipper2(90))