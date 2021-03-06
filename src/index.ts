class Pack {
  billValue: number;
  nbBills: number;
}

class PackWithdrawal {
  pack: Pack;
  rest: number;
}

export function withdraw(amount: number): Array<Pack> {
  let rest: number = amount;

  return billValues.map(
    (billValue) => {
      let result: PackWithdrawal = withdrawPack(billValue, rest);
      rest = result.rest;
      return result.pack;
    }
  );
}

export function withdrawPack(billValue: number, amount: number): PackWithdrawal {
  let rest: number = amount % billValue;
  let nbBills: number = (amount - rest) / billValue;

  return { pack: { billValue, nbBills }, rest: rest };
}

const billValues: Array<number> = [500, 200, 100, 50, 20, 10];
