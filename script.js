class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    console.log(2023 - this.birthYear);
  }
}

const jessica = new Person('Jessica', 1991);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

jessica.age;
