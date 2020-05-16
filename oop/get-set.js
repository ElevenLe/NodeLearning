const data = {
    location : [],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this,location.push(this._location)
    }
}

data.location = " ph "
console.log(data.location)