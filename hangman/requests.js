const getPuzzle = () => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        }
        else if(e.target.readyState === 4){
            reject("An error has taken place")
        }
    })
    request.open('GET','http://puzzle.mead.io/puzzle')
    request.send()
})

const getCountryCallback = (countryCode, callback) => {
    const request_test = new XMLHttpRequest()

    request_test.addEventListener("readystatechange", (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country.name)
        }
        else{
            callback("Did not find", undefined)
        }
    })

    request_test.open("GET", 'http://restcountries.eu/rest/v2/all')
    request_test.send()
}

const getCountry = (countryCode) => new Promise((resolve,reject) =>{
    const request_test = new XMLHttpRequest()

    request_test.addEventListener("readystatechange", (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country.name)
        }
        else{
            reject("Did not find")
        }
    })

    request_test.open("GET", 'http://restcountries.eu/rest/v2/all')
    request_test.send()
}) 