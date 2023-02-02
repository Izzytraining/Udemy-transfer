'use strict'


let excursions = getSavedExcursions();

const filters = {
  searchText: "",
  sortBy: "alphabetical",
};

renderMyExcursions(excursions, filters);

document.querySelector("#excursion-form").addEventListener("submit", (e) => {
    const excursionId = uuidv4();
    const DateTime = luxon.DateTime;
    const dt = DateTime.now();
    console.log(dt.toString());
  
    excursions.push({
      id: excursionId,
      title: "",
      body: "",
      createdAt: dt,
      updatedAt: dt,
    });
  
    saveMyExcursions(excursions);
    renderMyExcursions(excursions, filters);
    e.target.elements.newExcursion.value = "";
    location.assign(`edit.html#${excursionId}`);
  });

  ///event listener input
document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value;
    renderMyExcursions(excursions, filters);
    console.log(e.target.value);
  });
  
  document.querySelector("#filter-by").addEventListener("change", (e) => {
    filters.sortBy = e.target.value;
    renderExcursions(excursions, filters);
  });
  
  window.addEventListener("storage", (e) => {
    if (e.key === "excursions") {
      excursions = JSON.parse(e.newValue);
      renderMyExcursions(notes, filters);
    }
  });
  