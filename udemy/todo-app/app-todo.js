
const todos = findSavedToDo()

const filters = {
  searchText: "",
  hideCompleted: false,
};



 //to grab each todo object and then create and element as text content and then query select it to the body 
  //and then append child
renderToDo(todos, filters);

///search text
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

  saveToDos(todos)

  console.log(e.target.elements.newToDO.value);
  e.target.elements.newToDO.value = "";
  renderToDo(todos, filters);
});

//CHECKBOX
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    console.log(e.target.checked);
    renderToDo(todos, filters);
  });

  renderToDo(todos, filters);