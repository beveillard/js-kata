const billsAvailable = [500, 200, 100, 50, 20, 10];

export function atm(amount) {
  let rest = amount;

  return billsAvailable.map(
    (billValue) => {
      let nbBills;
      [nbBills, rest] = withdraw(billValue, rest);
      return nbBills;
    }
  );
}

function withdraw(billValue, amount) {
  let rest = amount % billValue;
  let nbBills = (amount - rest) / billValue;

  return [nbBills, rest];
}
