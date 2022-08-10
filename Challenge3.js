class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargedBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at this.speed km/h, with a charge of ${this.#charge}`
    );
  }
}

const tesla = new EV('Tesla', 120, 90);
// console.log(tesla);

// tesla.chargedBattery(50);
// console.log(tesla);

// tesla.brake();
// console.log(tesla);

// tesla.accelerate();
// console.log(tesla);

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);

console.log(rivian.speedUs);
