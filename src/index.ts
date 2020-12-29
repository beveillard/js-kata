const billsAvailable = [500, 200, 100, 50, 20, 10];

export function atm(amount) {
  let billsWithdrawn = [];

  function withdraw(billValue) {
    let rest = amount % billValue;

    //billsWithdrawn.push((amount - rest) / billValue);
    billsWithdrawn = [...billsWithdrawn, (amount - rest) / billValue];
    amount = rest;
  }

  billsAvailable.forEach(withdraw);

  return billsWithdrawn;
}
