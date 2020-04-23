let myBook = {
    title: '1948',
    author: 'George Orwell',
    pageCount: 364
}

let otherBook = {
    title: 'a people history',
    author: 'Howard zinn',
    pageCount: 723
}

let getSummary = function(book){
    return{
        summary : `${book.title} by ${book.author}`,
        pageSum : `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherbookSummary = getSußmmary(otherBook)

console.log(bookSummary.pageSum)


// challenge area
// create function

let convertF = function(f){
    return{
        f: f,
        k: (f + 495) * (5/9),
        c: (f -32) * (5/9)
    }

}