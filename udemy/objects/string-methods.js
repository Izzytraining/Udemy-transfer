let name = "Bobby Drapper";

console.log(name.length);

let password = "gy45opgg!";
console.log(password.includes("23"));

let isValidPassword = function (password) {
  if (password.length > 8 && password.includes("password")) {
    return true;
  } else {
    return false;
  }
};
