const getPuzzleCallback = (wordCount) => new Promise((resolve, reject) => {
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
    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getPuzzlePromise = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200){
            return response.json()
        } else{
            throw new Error("Unable to fetch puzzle")
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getPuzzleAsync = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error("unable to get puzzle")
    }
}


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

const getCountryPromise = (countryCode) => new Promise((resolve,reject) =>{
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

const getCountryFetchPromise = (countryCode) => fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error("Unable to fetch")
    }
}).then((data) => data.find((country) => country.alpha2Code === countryCode).name)

const getCountryAsync = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`, {})
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode).name
    }else{
        throw Error ("Unable to find country")
    }
}

const getLocationFetchPromise = () => {
    return fetch("http://ipinfo.io/json?token=2d60a7bf4e1d7a", {}).then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error("Unable to fetch")
        }
    })
} 

const getLocationAsync = async () => {
    const response = await fetch("http://ipinfo.io/json?token=2d60a7bf4e1d7a", {})
    if(response.status === 200){
        return response.json()

    }else{
        throw new Error("Unable to fetch")
    }
}

const getCurrentCountry = async () => {
    const location = await getLocationAsync()
    return getCountryAsync(location.country)
}