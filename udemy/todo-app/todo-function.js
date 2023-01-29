//Checking for existing data -
///read exisiting data
const findSavedToDo = function () {
  const todosJSON = localStorage.getItem("todos");

  return todosJSON !== null ? JSON.parse(todosJSON) : [];
  // if (todosJSON !== null) {
  //   return JSON.parse(todosJSON);
  // } else {
  //     return []
  // }
};
//console.log(localStorage.getItem("location"));
///localStorage.setItem("location", "Nottingham");

//Save todos

const saveToDos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//rendering the todos
///Render the todo
const renderToDo = function (todos, filters) {
  let filteredToDos = todos.filter(function (todo) {
    const searchTextMatch = todo.body
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    //return todo.body.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const inCompleteToDos = filteredToDos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todoDiv").innerHTML = "";

  ///To dos message - summary
  document
    .querySelector("#todoDiv")
    .appendChild(generateMessageDOM(inCompleteToDos));

  ///filter to todos

  filteredToDos.forEach(function (todo) {
    document.querySelector("#todoDiv").appendChild(generateToDoDOM(todo));
  });
};

//Remove a todo from the list
const removeToDo = function (id) {
  const todosIndex = todos.findIndex(function (todo) {
    return todos.id === id;
  });

  if (todosIndex > -1) {
    todos.splice(todosIndex, 1);
  }
};

//addeventhandlercheckbox - toggle to switch between two options
const todoToggle = function (id) {
  const todo = todos.find(function (todo) {
    return todos.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

//DOM for list of todos
const generateToDoDOM = function (todo) {
  const toDOEL = document.createElement("div");
  // const checkbox = document.createElement('input')
  //const textp = document.createElement("p");
  const checkbox = document.createElement("input");
  const toDOText = document.createElement("span");
  const removeButton = document.createElement("button");

  //textp.textContent = todo.body;
  //checkbox
  //  checkbox.textContent = '√'
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  toDOEL.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    todoToggle(todos.id);
    saveToDos(todos);
    renderToDo(todos, filters);
  });

  //todo text
  toDOText.textContent = todo.body;
  toDOEL.appendChild(toDOText);

  //buttonremove
  removeButton.textContent = "x";
  toDOEL.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    console.log(todos);
    saveToDos(todos);
    removeToDo(todos.id);
    renderToDo(todos, filters);
  });

  return toDOEL;
};

//DOM for to dos message summary

const generateMessageDOM = function (inCompleteToDos) {
  const newParagraph = document.createElement("h3");
  newParagraph.textContent = `You have ${inCompleteToDos.length} todos left`;
  return newParagraph;
};
