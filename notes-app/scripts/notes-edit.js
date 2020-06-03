'use strict'

const titleElment = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeElement  = document.querySelector("#remove-note")
const dataElement = document.querySelector("#last-edited")
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if(!note){
    location.assign("/index.html")
}

titleElment.value = note.title
bodyElement.value = note.body
dataElement.textContent = generateLastEdited(note.updatedAt)

titleElment.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dataElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dataElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
removeElement.addEventListener("click", (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// window is browser globale variable includes document and location
// storage fire when any of data in local storage data changes
window.addEventListener('storage', (e) => {
    if (e.key === "notes"){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId )
        
        if(!note){
            location.assign("/index.html")
        }
        
        titleElment.value = note.title
        bodyElement.value = note.body
        dataElement.textContent = generateLastEdited(note.updatedAt)
    }
})

