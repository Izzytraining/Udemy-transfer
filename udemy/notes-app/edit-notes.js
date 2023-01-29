"use strict";
////

const titleEL = document.querySelector("#note-title");
const bodyEL = document.querySelector("#note-body");
const editButton = document.querySelector("#edit-btn");
const removeEL = document.querySelector("#remove-note");

const dateEL = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => {
  console.log(note.id);
  // console.log(notesId)
  return note.id === noteId;
});
if (note === undefined) {
  location.assign(`index.html`);
}

//editing the edited notes

titleEL.value = note.title;
bodyEL.value = note.body;
dateEL.value = generateLastEdit();

///title change
titleEL.addEventListener("input", (e) => {
  note.title = e.target.value;
  saveMyNotes(notes);
  note.updatedAt = DateTime.now().valueOf();
});

///body change
bodyEL.addEventListener("input", (e) => {
  note.body = e.target.value;
  // note.updatedAt = DateTime.now();
  saveMyNotes(notes);
  note.updatedAt = DateTime.now().valueOf();
});

removeEL.addEventListener("click", () => {
  removeMyNotes(note.id);
  saveMyNotes(notes);
  location.assign(`index.html`);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find(function (note) {
      console.log(note.id);
      // console.log(notesId)
      return note.id === noteId;
    });
    if (note === undefined) {
      location.assign(`index.html`);
    }

    //editing the edited notes

    titleEL.value = note.title;
    bodyEL.value = note.body;
  }
});

//console.log(notes)
