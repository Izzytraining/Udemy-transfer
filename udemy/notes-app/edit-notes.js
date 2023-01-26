
// const titleEL = document.querySelector('#note-title')
// const bodyEL = document.querySelector('#note-body')
// const removeEL = document.querySelector('#removenote')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    console.log(note.id)
    // console.log(notesId)
    return note.id === noteId

})
if (note === undefined) {
    location.assign(`/index.html`)
}


document.querySelector('#note-title').value = note.title

document.querySelector('#note-body').value = note.body

 //console.log(notes)