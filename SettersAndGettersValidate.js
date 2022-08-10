class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    console.log(2023 - this.birthYear);
  }

  /**
   * @param {any} name
   */
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Person('Jessica Dave', 1991);
// const walter = new Person('Walter White', 1991);

console.log(jessica.calcAge());
