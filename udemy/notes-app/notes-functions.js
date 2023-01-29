const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  return notesJSON !== null ? JSON.parse(notesJSON) : [];
};
//save notes
const saveMyNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Remove a todo from the list
const removeMyNotes = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//DOM for list of notes
const generateNotesDOM = (note) => {
  const notesEL = document.createElement("div");
  const notesText = document.createElement("a");
  const removeButton = document.createElement("button");

  //buttonremove
  removeButton.textContent = "x";
  notesEL.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
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
const renderMyNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector("#some-notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEL = generateNotesDOM(note);
    document.querySelector("#some-notes").appendChild(generateNotesDOM(note));
  });
  // return noteEL;
};

///generate last edited message

const generateLastEdit = (updatedAt) => {
  return `Last edited ${Date(updatedAt)}`;
};

// ///read exisiting data

//     //console.log(localStorage.getItem("location"));
//     ///localStorage.setItem("location", "Nottingham");
