'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return (this.speed += 10);
  }

  brake() {
    return (this.speed -= 5);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }

  static getSpecs(car) {
    return `${car.make} going at ${car.speedUs} mph`;
  }
}

// const bmw = new Car('BMW', 120);
// const ford = new Car('Ford', 120);

// // console.log(ford);
// // console.log(ford.brake());
// // console.log(ford.speedUs);
// ford.speedUs = 50;
// console.log(ford);

// Create a student class.
