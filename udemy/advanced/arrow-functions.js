const square = (num) => num * num;

const squarlong = (num) => {
  return num * num;
};
console.log(square(5));

const people = [
  { name: "Bobby", age: 29 },
  { name: "Amos", age: 34 },
  { name: "Jack", age: 25 },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const aged25 = people.filter((person) => person.age === 25);
console.log(aged25);
