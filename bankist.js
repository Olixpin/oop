// Properties are called fields

class Account {
  constructor(owner, currency, _pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = _pin;
    // Protected properties
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account with us, ${this.owner}!`);
  }

  // public interface

  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this._movements.push(-val);
  }

  _approveLoans(val) {
    return true;
  }

  requestLoans(val) {
    if (this._approveLoans(val)) {
      this.deposit(val);
      console.log(`You have requested a loan of ${val} ${this.currency}`);
    }
  }
}

const account1 = new Account('John', 'USD', 1234);
account1.deposit(100);
account1.withdraw(50);

account1.requestLoans(1000);

console.log(account1);
console.log(account1.getMovements());
