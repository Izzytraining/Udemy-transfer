//function - input (argument), code, output (return value)

let conversion = function (fahrenheit) {
  let celius = ((fahrenheit - 32) * 5) / 9;
  return celius;
};

let tempOne = conversion(32);
let tempTwo = conversion(60);

console.log(tempOne);
console.log(tempTwo);

//let value = celius(0)
