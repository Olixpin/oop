function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('BMW', 95);

// console.log(bmw.accelerate());
// console.log(mercedes.accelerate());

// console.log(bmw.brake());
// console.log(mercedes.brake());

const ElectricCar = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargedBattery = function (chargeTo) {
  this.battery = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.battery--;
  return `${this.make} going at this.speed km/h, with a charge of ${this.battery}`;
};

const tesla = new ElectricCar('Tesla', 120, 90);
console.log(tesla);

tesla.chargedBattery(50);
console.log(tesla);

tesla.brake();
console.log(tesla);

tesla.accelerate();
console.log(tesla);
