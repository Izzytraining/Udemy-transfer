//ClASS SYNTAX///////////
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach((like) => {
    bio += `${this.firstName} likes ${like}.`
  })
  return bio
  }
  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

///subclasses
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
 super(firstName, lastName, age, likes)
 this.position = position
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

//subclass challenge
class Student extends Person {
  constructor(firstName, lastName, age, grade) {
super(firstName, lastName, age)
this.grade = grade
  }
  updateGrade(change) {
    return this.grade += change
  }
  getBio() {
    const status = this.grade >= 5? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class`
  }
}



const me = new Employee("Hayley", "Parson", 37, "Writer", ['Reading', 'Boardgames']);
const meStud = new Student("Evelyn", "Howard", 13, 7)
console.log(meStud.getBio());
// me.setName('Nathalie Moon')
meStud.updateGrade(-2)
console.log(meStud.getBio());


// const person2 = new Person("Barry", "Trotter", 34);
// console.log(person2.getBio());

//constructor function 'new' and captical letters
//Prototypal inheritance