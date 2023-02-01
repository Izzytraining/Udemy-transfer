"use strict";
////

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  ///catching and loading a page if it crashes from an error
  try {
    return notesJSON !== null ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};
//save notes
const saveMyNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Remove note from the list
const removeMyNotes = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//DOM for list of notes
const generateNotesDOM = (note) => {
  const notesEL = document.createElement("a");
  const notesText = document.createElement("p");
  // const status = document.createElement("p");
  const removeButton = document.createElement("button");

  // buttonremove
  removeButton.textContent = "delete";
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
  notesText.classList.add("list-item__title");
  notesEL.appendChild(notesText);

  //setup link
  notesEL.setAttribute("href", `edit.html#${note.id}`);
  notesEL.classList.add("list-item");
  return notesEL;
};

///////////
const sortNotes = (notes, sortBy) => {
  if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

///Render the notes
const renderMyNotes = (notes, filters) => {
  const notesEl = document.querySelector("#some-notes");
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEL = generateNotesDOM(note);
      notesEl.appendChild(noteEL);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.appendChild(emptyMessage);
  }

  // return noteEL;
};

///generate last edited message

// const generateLastEdit = (updatedAt) => {
//   return `Last edited ${Date(updatedAt)}`;
// };

// ///read exisiting data

//     //console.log(localStorage.getItem("location"));
//     ///localStorage.setItem("location", "Nottingham");
