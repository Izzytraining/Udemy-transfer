"use strict";
////

const titleEL = document.querySelector("#note-title");
const bodyEL = document.querySelector("#note-body");
const removeEL = document.querySelector("#remove-note");
const dateEL = document.querySelector("#last-edited");

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);
// console.log(notesId)
if (!note) {
  location.assign(`index.html`);
}

//editing the edited notes

titleEL.value = note.title;
bodyEL.value = note.body;
// dateEL.value = generateLastEdit();

///title change
titleEL.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = DateTime.now().valueOf();
  saveMyNotes(notes);
});

///body change
bodyEL.addEventListener("input", (e) => {
  note.body = e.target.value;
  // note.updatedAt = DateTime.now().valueOf();
  saveMyNotes(notes);
});

removeEL.addEventListener("click", () => {
  removeMyNotes(note.id);
  saveMyNotes(notes);
  location.assign(`index.html`);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("index.html");
    }

    titleEL.value = note.title;
    bodyEL.value = note.body;
  }
});

console.log(notes);
