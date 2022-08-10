class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    console.log(2023 - this.birthYear);
  }

  // Not an instance - static method
  static hey() {
    console.log('Hello there!');
    console.log(this);
  }
}

// Array.from(); // convert Array structure to real array;
// It can only be used on the Array constructor and not the prototype

// Person.hey();

// Create a student class.

class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} and I'm studying ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but I feel more like ${
        2037 - this.birthYear - 5
      }`
    );
  }
}

Student.prototype = Object.create(Person.prototype);
const martha = new Student('Martha', 1991, 'Computer Science');
console.log(martha);

martha.introduce();
martha.calcAge();
