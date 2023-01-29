const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.getBio = function () {
  return `${this.firstName} is ${this.age}.`;
};

const me = new Person("Hayley", "Parson", 67);
console.log(me.getBio());

const person2 = new Person("Barry", "Trotter", 34);
console.log(person2.getBio());

///constructor function 'new' and captical letters
