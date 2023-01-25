/////Tempconversion

let fahrenheit = 32;
let celcius = ((fahrenheit - 32) * 5) / 9;
let kelvin = ((fahrenheit + 459.67) * 5) / 9;

console.log(celcius);
console.log(kelvin);

let temp = 50;

if (temp <= 32) {
  console.log("It is freezing");
} else if (temp >= 33) {
  console.log("Get some sun cream on!");
}

///////ageprice
let age = 8;

if (age <= 12) {
  console.log("child price");
}
if (age >= 13) {
  console.log("adult price");
}

///////tempifelse

let temperature = 70;

if (temperature == 45) {
  console.log("Go for it, weather is good!");
} else if (temperature <= 44) {
  console.log("Its a bit nippy, put on a coat");
} else if (temperature <= 60) {
  console.log("It's hot outside, yikes!");
} else {
  console.log("you've probably spontaniously combusted");
}

/////////resturant

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Vegan menu only");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Vegan and regular menu");
} else {
  console.log("Offer anything on the menu");
}
