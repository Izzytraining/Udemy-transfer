const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//save notes
const saveMyNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Remove a todo from the list
const removeMyNotes = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//DOM for list of notes
const generateNotesDOM = function (note) {
  const notesEL = document.createElement("div");
  const notesText = document.createElement("a");
  const removeButton = document.createElement("button");

  //buttonremove
  removeButton.textContent = "x";
  notesEL.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    console.log(notes);
    removeMyNotes(note.id);
    saveMyNotes(notes);
    renderMyNotes(notes, filters);
  });

  ///note title text
  if (note.title.length > 0) {
    notesText.textContent = note.title;
  } else {
    notesText.textContent = "Unnamed note";
  }

  notesText.setAttribute("href", `edit.html#${note.id}`);
  notesEL.appendChild(notesText);

  return notesEL;
};

///Render the notes
const renderMyNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#some-notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEL = generateNotesDOM(note);
    document.querySelector("#some-notes").appendChild(generateNotesDOM(note));
  });
  // return noteEL;
};

// ///read exisiting data

//     //console.log(localStorage.getItem("location"));
//     ///localStorage.setItem("location", "Nottingham");
