///challenge area tip

let getTip = function (total, tipPercent) {
  return total * tipPercent;
};
let tip = getTip(40, 0.2);
console.log(tip);

////

let findVat = function (receipt, vat) {
  let vatPercent = vat * 100;
  let receiptTotal = receipt * vat;
  return `The vat on your shop is, ${vatPercent} and your, ${receiptTotal}`;
};

let vat = findVat(20, 2.5);
console.log(vat);
