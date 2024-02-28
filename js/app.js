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

// * What day is it? Conditional Statements ************************************************************
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

// * What time is it? Conditional Statements ************************************************************
// let time = new Date().getHours();
let time = 22;

let greeting = "Hi";
firstName = "Laura";

if (time < 12) {
  console.log("Good morning");
} else if (time <= 18) {
  console.log("Good afternoon");
} else if (time <= 22) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

// alert(`${greeting}, ${firstName}`);

// * Selecting and Modifying with querySelector ************************************************************
let available = document.querySelector("h3");
console.log(available);

let mainTitle = document.querySelector(".main-title");
console.log(mainTitle);

let firstItem = document.querySelector("ul li");
console.log(firstItem);

let intro = document.querySelector(".intro p");
console.log(intro);

intro = document.querySelector(".intro p");
intro.style.color = "purple";
console.log(intro);

intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";

// !innerText and innerHtml
// let firstCaption = document.querySelector("figcaption");
// firstCaption.innerText = "The LaLa";
// console.log(firstCaption);

// firstCaption = document.querySelector("figcaption");
// firstCaption.innerHTML = "The <strong>LaLa</strong>";
// console.log(firstCaption);

// * Connecting JavaScript to HTML ************************************************************
mainTitle = document.querySelector("h1");
console.log(mainTitle.outerHTML);

mainTitle = document.querySelector("h1");
mainTitle.innerHTML = "Yay, JavaScript!!";

let body = document.querySelector("body");
console.log(body);

body = document.querySelector("body");
body.style.backgroundColor = "#FEF2F1";

// * Manipulating the DOM ************************************************************
let firstListItem = document.querySelector("ul li");
// console.log(firstListItem);

firstListItem = document.querySelector("ul li");
firstListItem.style.textTransform = "uppercase";
console.log(firstListItem);

let moreReasons = document.querySelector(".more-reasons");
console.log(moreReasons.outerHTML);

moreReasons.style.fontSize = "2.5em";
console.log(moreReasons);

let whyJS = document.querySelector("h3");
console.log(whyJS);

whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
console.log(whyJS);

let highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffFf82";

let mainImage = document.querySelector("img");
console.log(mainImage);

mainImage.src = "img/new-js-logo.jpeg";
console.log(mainImage);

mainImage.alt = "new js logo";
console.log(mainImage);
