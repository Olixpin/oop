const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Prototype Linking
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.firstName} and I'm studying ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.calcAge();
mike.introduce();
