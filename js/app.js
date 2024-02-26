// * Concatenate Strings ************************************************************
let firstName = "Laura";
let favoriteSnack = "Chips";

console.log("Hi, my name is " + firstName + ".");
console.log(
  "Hi, my name is " +
    firstName +
    " and I my favorite snack is " +
    favoriteSnack +
    "."
);
let numberOfHorses = 2;
console.log(numberOfHorses);

// * Template Literals ************************************************************
let prize = "Hawaiian Vacation";
let tickets = 30;
let sold = 12;

console.log(`The prize is a ${prize}!! Only ${tickets - sold} tickets remain.`);

let tempCelsius = Number(10);
let toFahrenheit = tempCelsius * 1.8 + 32;

console.log(
  `Outside my friend's house it's ${tempCelsius}, which is ${toFahrenheit}.`
);
