let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderMyNotes(notes, filters);

document.querySelector("#notes-form").addEventListener("submit", function (e) {
  const noteId = uuidv4();
  const DateTime = luxon.DateTime;
  const dt = DateTime.now();
  //console.log(dt.toString());

  notes.push({
    id: noteId,
    title: "",
    body: "",
    createdAt: dt,
    updatedAt: dt,
  });

  saveMyNotes(notes);
  // renderMyNotes(notes, filters)
  // e.target.elements.newNote.value = "";
  location.assign(`edit.html#${noteId}`);
});

///event listener input
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderMyNotes(notes, filters);
  console.log(e.target.value);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderMyNotes(notes, filters);
    saveMyNotes(notes);
  }
});
