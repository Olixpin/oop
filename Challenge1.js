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

const bmw = new Car('BMW', 120);
const mercedes = new Car('BMW', 95);

console.log(bmw.accelerate());
console.log(mercedes.accelerate());

console.log(bmw.brake());
console.log(mercedes.brake());
