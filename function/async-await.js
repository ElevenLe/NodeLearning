const getDataPromise = (num) => new Promise((resovle,reject) => {
    setTimeout(() => {
        typeof num === "number" ? resovle(num * 2) : reject("number must be provided")
    }, 2000)
})

const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log("Data" ,data)
}).catch((error) => {
    console.log('error', error)
})