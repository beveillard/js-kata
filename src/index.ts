export function atm(amount) {
  let withdraw500 = withdraw(amount, 500); amount = withdraw500[1];
  let withdraw200 = withdraw(amount, 200); amount = withdraw200[1];
  let withdraw100 = withdraw(amount, 100); amount = withdraw100[1];
  let withdraw50 = withdraw(amount, 50); amount = withdraw50[1];
  let withdraw20 = withdraw(amount, 20); amount = withdraw20[1];
  let withdraw10 = withdraw(amount, 10); amount = withdraw10[1];

  return [
    withdraw500[0],
    withdraw200[0],
    withdraw100[0],
    withdraw50[0],
    withdraw20[0],
    withdraw10[0]
  ];
}

function withdraw(amount, billValue) {
  let rest = amount % billValue;
  let numberOfBills = (amount - rest) / billValue;

  return [numberOfBills, rest];
}