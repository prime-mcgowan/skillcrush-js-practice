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

// let mealCostQustion = Number(prompt("Cost of meal (ex. 25.99)"));
// console.log(mealCostQuestion);

// * Practice ************************************************************
// let favoriteColor = prompt("What is your favorite color?");
// console.log(`Your favorite color is ${favoriteColor}.`);

// let yourName = prompt("What is your name?");
// let birthYear = prompt("What year were you born?");
// let age = 2024 - birthYear;

// console.log(`${yourName} is ${age} years old.`);

// let hourlyWage = prompt("What is your hourly wage?");
// let hoursWorked = prompt("How many hours do you work in a week?");
// let weeklyWages = hourlyWage * hoursWorked;

// console.log(`You make $${weeklyWages} a week.`);

// * Conditional Statements ************************************************************
// alert("Take a look outside and check the weather");

// let hotWeather = false;
// let snowyWeather = false;
// let windyWeather = true;

// if (hotWeather === true) {
//   console.log("Wearin' shorts today!!");
// } else if (snowyWeather === true) {
//   console.log("It's a hats and gloves kinda day.");
// } else {
//   console.log("Probably gonna wanna sweater...it's windy.");
// }

// let weekday = new Date().toLocaleString("en-US", { weekday: "long" });
let weekday = "Friday";

if (weekday === "Monday") {
  console.log("Let's get this week started!!");
} else if (weekday === "Tuesday") {
  console.log("Working at ED Williams");
} else if (weekday === "Wednesday") {
  console.log("Midweek, baby!!");
} else if (weekday === "Thursday") {
  console.log("Almost there!!");
} else if (weekday === "Friday") {
  console.log("It's Fri-YAY!!!!");
} else {
  console.log("The weekend is HERE!!");
}
