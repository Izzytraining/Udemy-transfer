// const ptag = document.querySelectorAll("p");
// ptag.forEach(function (p) {
//   //p.textContent = "This is a one liner";
//   //console.log(p.textContent);
//   ptag.remove("the");
// });

// ptag.forEach(function (p) {
//   //p.textContent = "This is a one liner";
//   //console.log(p.textContent);
//   //  if (ptag.textContent.includes('the'){
//   //         ptag.remove()
//   //     })
//   ptag.remove("the");
// });

let todos = [];

const filters = {
  searchText: "",
  hideCompleted: false,
};

const todosJSON = localStorage.getItem("toDOs");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

console.log(localStorage.getItem("location"));
///localStorage.setItem("location", "Nottingham");

////////

const renderToDo = function (todos, filters) {
  let filteredToDos = todos.filter(function (todo) {
    const searchTextMatch = todo.body
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    //return todo.body.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  // filteredToDos = filteredToDos.filter(function (todo) {
  //   if (filters.hideCompleted) {
  //     return !todo.completed;
  //   } else {
  //     return true;
  //   }
  // });
  const inCompleteToDos = filteredToDos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todoDiv").innerHTML = "";

  //////////////
  const newParagraph = document.createElement("h3");
  newParagraph.textContent = `You have ${inCompleteToDos.length} todos left`;
  document.querySelector("#todoDiv").appendChild(newParagraph);

  //////////////
  //to grab each todo object and then create and element as text content and then query select it to the body and then append child
  filteredToDos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.body;
    document.querySelector("#todoDiv").appendChild(p);
  });

  renderToDo(todos, filters);

  filteredToDos.forEach(function (todo) {
    const todoEL = document.createElement("p");
    todoEL.textContent = todo.body;
    document.querySelector("#todoDiv").appendChild(todoEL);
  });
};

///event search
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderToDo(todos, filters);
  console.log(e.target.value);
});

///Form listener

document.querySelector("#todo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    body: e.target.elements.newToDO.value,
    completed: false,
  });

  localStorage.setItem("todos", JSON.stringify(todos));

  console.log(e.target.elements.newToDO.value);
  renderToDo(todos, filters);
  e.target.elements.newToDO.value = "";
});

/////CHECKBOX
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderToDo(todos, filters);
    console.log(e.target.checked);
  });

/////////////////////////////////////////////////////////////
////listen for new creation
// document.querySelector("#add-todo").addEventListener("click", function () {
//   //document.querySelectorAll(".todo-remove").forEach(function (getrid) {
//   console.log("add a new todo");
// });

// document
//   .querySelector("#new-todo-text")
//   .addEventListener("input", function (e) {
//     filters.searchText = e.target.value;
//     console.log(e.target.value);
//   });
