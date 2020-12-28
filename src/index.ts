const billsAvailable = [500, 200, 100, 50, 20, 10];

export function atm(amount) {
  let billsWithdrawn = [];

  let withdraw = function (billValue, billIndex) {
    let rest = amount % billValue;

    billsWithdrawn[billIndex] = (amount - rest) / billValue;
    amount = rest;
  }

  billsAvailable.forEach(withdraw);

  return billsWithdrawn;
}
