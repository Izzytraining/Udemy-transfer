const titleEL = document.querySelector("#note-title");
const bodyEL = document.querySelector("#note-body");
const editButton = document.querySelector("#edit-btn");
const removeEL = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
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

///title change
titleEL.addEventListener("input", function (e) {
  note.title = e.target.value;
  note.updatedAt = DateTime.now();
  saveMyNotes(notes);
});

///body change
bodyEL.addEventListener("input", function (e) {
  note.body = e.target.value;
  note.updatedAt = DateTime.now();
  saveMyNotes(notes);
});

removeEL.addEventListener("click", function () {
  removeMyNotes(note.id);
  saveMyNotes(notes);
  location.assign(`index.html`);
});

window.addEventListener("storage", function (e) {
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
