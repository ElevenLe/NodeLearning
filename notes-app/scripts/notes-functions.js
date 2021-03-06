'use strict'

// read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try{
        return notesJSON ? JSON.parse(notesJSON) : []
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id) => {
    const indexId = notes.findIndex((note) => id === note.id)
    if(indexId > -1){
        notes.splice(indexId, 1)
    }
}


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEL = document.createElement('p')
    // const button = document.createElement('button')

    // set up the remove note button
    // button.textContent = "delete"
    // noteEl.appendChild(button)
    // button.addEventListener('click', () =>  {
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)
    // })


    // set up the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    }else{
        textEl.textContent = 'Unnamed note'
    }
    // textEl.setAttribute('href', `/edit.html#${note.id}`)
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add("list-item")

    // setup the status message
    statusEL.textContent = generateLastEdited(note.updatedAt)
    statusEL.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEL)


    return noteEl
}


// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === "byEdited"){
        return notes.sort((a,b)=>{
            if(a.updatedAt > b.updatedAt){
                return -1
            }
            else if(a.updatedAt < b.updatedAt){
                return 1
            }else{
                return 0
            }
        })
    }
    else if(sortBy === "byCreated"){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return -1
            }
            else if(a.createdAt < b.createdAt){
                return 1
            }else{
                return 0
            }
        })
    }
    else if(sortBy === "alphabetically"){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }
            else if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            }
            else{
                return 0 
            }
        })
    }
    else{
        return notes
    }
}


// render application notes
const renderNotes = (notes, filters) => {
    const notesEL = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEL.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEL.appendChild(noteEl)
        })
    }else{
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = "No notes to show"
        // attend with css style
        emptyMessage.classList.add('empty-message')
        notesEL.appendChild(emptyMessage)
    }
    
}

// Generate the last edited message
// video keep the original function
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

