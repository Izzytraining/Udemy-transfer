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


const me = new Person("Hayley", "Parson", 67, ['Reading', 'Boardgames']);
me.setName('Nathalie Moon')
console.log(me.getBio());

const person2 = new Person("Barry", "Trotter", 34);
console.log(person2.getBio());

//constructor function 'new' and captical letters
//Prototypal inheritance