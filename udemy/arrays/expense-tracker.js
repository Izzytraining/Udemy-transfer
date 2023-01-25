//expense exercise

const account = {
  name: "Dave Faker",
  expenses: [
    { description: "car-mileage", amount: 23 },
    { description: "food", amount: 12 },
    { description: "equipment", amount: 150 },
  ],
  income: [{ description: "Job", amount: 200 }],

  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let totalBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    totalBalance = totalIncome - totalExpenses;

    return `${this.name} has a £${totalExpenses} in expenses and a total of £${totalIncome} in Income, and a balance of £${totalBalance}}`;
  },
};

account.addExpense("Rent", 100);
account.addIncome("Engineer", 5000);
console.log(account.getAccountSummary());
//console.log(account.income);

// this.income.forEach(function (income) {
//   totalIncome = totalIncome + income.amount;
// });

//accountBalance = totalIncome - totalExpenses;
// return `User ${this.name} has an income of £${this.totalIncome} and a total of £${this.totalExpenses} expenses, with an overall balance of £${this.accountBalance}`;

///expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Dave Faker has £ in expenses
