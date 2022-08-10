// Properties are called fields

class Account {
  // public fields (instances)
  locale = navigator.language;
  // Private fields (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    console.log(`Thanks for opening an account with us, ${this.owner}!`);
  }

  // public interface

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  // private methods (instances)
  _approveLoans(val) {
    return true;
  }
  //   _approveLoans(val) {
  //     return true;
  //   }

  requestLoans(val) {
    if (this._approveLoans(val)) {
      this.deposit(val);
      console.log(`You have requested a loan of ${val} ${this.currency}`);
      return this;
    }
  }
}

const account1 = new Account('John', 'USD', 1234);
account1.deposit(100);
account1.withdraw(50);

account1.requestLoans(1000);

console.log(account1);
console.log(account1.getMovements());

console.log(account1._approveLoans(1000));

account1.deposit(300).withdraw(200).requestLoans(1000);
