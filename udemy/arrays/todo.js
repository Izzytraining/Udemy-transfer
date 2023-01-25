// const todo = ["Washing", "Food shop", "Walk", "Homework", "Haircut"];

// todo[1] = "Take out the bins";
// todo.splice(0);
// todo.push("Buy coffee");
// console.log(todo);

// console.log(todo[2]);
// console.log(todo[todo.length - 2]);
// console.log(`You have ${todo[0]}`);

// console.log(todo.pop());
// todo.push("Hoover");

// console.log(todo.unshift());
// todo.unshift("Car");

//////Looping over arrays
//you can pass a function into a function called a call back function

const toBuy = ["Oranges", "Milk", "Bread", "Cake", "Wine"];
//console.log(toBuy);
toBuy.push("Diet Coke");
toBuy.unshift("Celery");
console.log(`Your shopping list has ${toBuy.length} items to buy`);

toBuy.forEach(function (toBuy, index) {
  const num = index + 1;
  console.log(`${num}. ${toBuy}`);
  //console.log(index);
});

////theforloop

// for (let count = toBuy.length - 1; count >= 0; count--) {
//   console.log(toBuy[count]);
// }

for (let count = 0; count < toBuy.length; count++) {
  const num = count + 1;
  console.log(`${num}. ${toBuy[count]}`);
}

// toBuy.forEach(function (toBuy, index) {
//   const num = index * 2;
//   console.log(`${num}. ${toBuy}`);
// });
