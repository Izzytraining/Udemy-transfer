let myFilms = {
  title: "Matrix",
  actor: "Keano Reeves",
  length: "180",
};

let otherFilms = {
  title: "Interstellar",
  actor: "Jessica Chastain",
  length: "200",
};

let getSummary = function (film) {
  return {
    summary: `${film.title} starring ${film.actor}`,
    filmLength: `${film.title} is ${film.length} minutes long`,
  };
  console.log(`${film.title} starring ${film.actor}`);
};

let filmSummary = getSummary(myFilms);
let otherFilmSummary = getSummary(otherFilms);

console.log(filmSummary.summary);
console.log(otherFilmSummary.summary);

console.log(filmSummary.filmLength);
console.log(otherFilmSummary.filmLength);
///////////

let myAccount = {
  name: "Steven Smith",
  expenses: 0,
  income: 0,
};

let addIncome = function (newIncome, amount) {
  newIncome.income = newIncome.income + amount;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has £${balance}. £${account.income} in income. ${account.expenses} in expenses. `;
};

addIncome(myAccount, 20000);
addExpenses(myAccount, 300);
console.log(getAccountSummary(myAccount));
