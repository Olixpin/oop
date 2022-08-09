'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

let john = new Person('John', 1991);
let mathilda = new Person('Mathilda', 2017);
console.log(john);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

john.calcAge();

console.log(john.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);
console.dir(Array.__proto__.__proto__);

Array.prototype.myCustomMethod = function () {
  return 'This is my custom method';
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log([1, 2, 3].myCustomMethod());
console.log([1, 2, 3, 1, 2, 3].unique());
// console.log(mathilda.__proto__ === john.__proto__); // true
// console.log(Person.prototype.isPrototypeOf(john)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = 'Homo Sapiens';
// console.log(john.species);
