'use strict';

const account = {
  owner: 'Olix',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
