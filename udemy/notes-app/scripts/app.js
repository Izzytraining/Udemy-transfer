"use strict";
////

let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "alphabetical",
};

renderMyNotes(notes, filters);

document.querySelector("#notes-form").addEventListener("submit", (e) => {
  const noteId = uuidv4();
  const DateTime = luxon.DateTime;
  const dt = DateTime.now();
  console.log(dt.toString());

  notes.push({
    id: noteId,
    title: "",
    body: "",
    createdAt: dt,
    updatedAt: dt,
  });

  saveMyNotes(notes);
  renderMyNotes(notes, filters);
  e.target.elements.newNote.value = "";
  location.assign(`edit.html#${noteId}`);
});

///event listener input
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderMyNotes(notes, filters);
  console.log(e.target.value);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderMyNotes(notes, filters);
    // saveMyNotes(notes);
  }
});
