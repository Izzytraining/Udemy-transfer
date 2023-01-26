
const notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderMyNotes(notes, filters)

document.querySelector('#notes-form').addEventListener('click', function (e){
const noteId = uuidv4()
  notes.push({
    id: noteId,
    title: '',
    body:''
  })
  
  saveMyNotes(notes)
  // renderMyNotes(notes, filters)
  // e.target.elements.newNote.value = "";
  location.assign(`/edit.html#${noteId}`)
})


///event listener input
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderMyNotes(notes, filters);
  console.log(e.target.value);
});


document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
















// console.log("helloooo");

// const notes = [
//   // { title: "My research", body: "More work on Javascript" },
//   // { title: "Next trip", body: "To Paris" },
//   // { title: "Planned events", body: "Birthday party" },
//   // { title: "Visits", body: "Family and friends" },
// ];

// const filters = {
//   searchText: "",
// };

// ///check for existing saved data

// const notesJSON = localStorage.getItem("notes");

// if (notesJSON !== null) {
//   notes = JSON.parse(notesJSON);
// }

// const renderNotes = function (notes, filters) {
//   const filteredNotes = notes.filter(function (note) {
//     return note.body.toLowerCase().includes(filters.searchText.toLowerCase());
//   });

  //  document.querySelector("#some-notes").innerHTML = "";

//   filteredNotes.forEach(function (note) {
//     const noteEL = document.createElement("p");

//     if (note.body.length > 0) {
//       noteEL.textContent = notes.body;
//     } else {
//       noteEL.textContent = "Unnamed note";
//     }

//     document.querySelector("#some-notes").appendChild(noteEL);
//   });
// };

// renderNotes(notes, filters);

// ///pushing a new note array from localStorage
// document.querySelector("#create-note").addEventListener("click", function (e) {
//   //console.log("Did this work?");
//   //e.target.textContent = "You click me!";
//   notes.push({
//     title: "",
//     body: "",
//   });
//   localStorage.setItem("notes", JSON.stringify(notes));
//   renderNotes(notes, filters);
// });




// //dom - document object model
// // //you can remove things from the html file with document.querySelector

// // const htag = document.querySelector("h1");
// // htag.remove();

// // //or remove all or manipulate of the same tag with querySelectorAll
// const ptag = document.querySelectorAll("p");
// ptag.forEach(function (p) {
//   p.textContent = "This is a one liner";
//   //console.log(p.textContent);
//   // p.remove();
// });

// // // /////adding a new element
// // const newParagraph = document.createElement("p");
// // newParagraph.textContent = "this is a new element from java";
// // document.querySelector("body").appendChild(newParagraph);

// // ///remove text
// document.querySelector("#delete-note").addEventListener("click", function () {
//   document.querySelectorAll(".my-notes").forEach(function (notes) {
//     notes.remove();
//   });
// });
