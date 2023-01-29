const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const me = new Person("Hayley", "Parson", 67);
console.log(me);

const person2 = new Person("Barry", "Trotter", 34);
console.log(person2);

///constructor function 'new' and captical letters
