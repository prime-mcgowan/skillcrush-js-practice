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

// * Converting Celsius to Fahrenheit ************************************************************
let tempCelsius = Number(10);
let toFahrenheit = tempCelsius * 1.8 + 32;

console.log(
  `Outside my friend's house it's ${tempCelsius}, which is ${toFahrenheit}.`
);

// * Split the Check Calculator ************************************************************
let mealCost = 25.99;
let tip = 0.18;
let tipAmount = mealCost * tip;
let total = mealCost + tipAmount;
let numOfPeople = 2;

console.log(`Your meal cost is $${mealCost}, and with tip, it comes to $${total.toFixed(
  2
)}.
Your share is $${(total / numOfPeople).toFixed(2)}. Hope it was delicious!`);

// prompt use example: let moneyRaised = Number(prompt("How much money did we raise?"));

let mealCostQeustion = Number(prompt("Cost of meal (ex. 25.99)"));
console.log(mealCostQeustion);
