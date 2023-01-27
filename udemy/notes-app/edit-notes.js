const titleEL = document.querySelector("#note-title");
const bodyEL = document.querySelector("#note-body");
const editButton = document.querySelector("#edit-btn");
const removeEL = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function (note) {
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
  saveMyNotes(notes);
});

///body change
bodyEL.addEventListener("input", function (e) {
  note.body = e.target.value;
  saveMyNotes(notes);
});

removeEL.addEventListener("click", function () {
  removeMyNotes(note.id);
  saveMyNotes(notes);
  location.assign(`index.html`);
});

// editButton.addEventListener("submit", function () {
//   titleEL.addEventListener("change", function (e) {
//     titleEL.e.target.value;
//     saveMyNotes(notes);
//     renderMyNotes(notes, filters);
//   });
//   bodyEL.addEventListener("change", function (e) {
//     saveMyNotes(notes);
//     renderMyNotes(notes, filters);
//   });
// });

// editButton(notes);

//console.log(notes)
