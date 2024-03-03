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
// let available = document.querySelector("h3");
// console.log(available);

// let mainTitle = document.querySelector(".main-title");
// console.log(mainTitle);

// let firstItem = document.querySelector("ul li");
// console.log(firstItem);

// let intro = document.querySelector(".intro p");
// console.log(intro);

// intro = document.querySelector(".intro p");
// intro.style.color = "purple";
// console.log(intro);

// intro.style.fontSize = "3em";
// intro.style.fontStyle = "italic";

// !innerText and innerHtml
// let firstCaption = document.querySelector("figcaption");
// firstCaption.innerText = "The LaLa";
// console.log(firstCaption);

// firstCaption = document.querySelector("figcaption");
// firstCaption.innerHTML = "The <strong>LaLa</strong>";
// console.log(firstCaption);

// * Connecting JavaScript to HTML ************************************************************
// mainTitle = document.querySelector("h1");
// console.log(mainTitle.outerHTML);

// mainTitle = document.querySelector("h1");
// mainTitle.innerHTML = "Yay, JavaScript!!";

// let body = document.querySelector("body");
// console.log(body);

// body = document.querySelector("body");
// body.style.backgroundColor = "#FEF2F1";

// * Manipulating the DOM ************************************************************
// let firstListItem = document.querySelector("ul li");
// // console.log(firstListItem);

// firstListItem = document.querySelector("ul li");
// firstListItem.style.textTransform = "uppercase";
// console.log(firstListItem);

// let moreReasons = document.querySelector(".more-reasons");
// console.log(moreReasons.outerHTML);

// moreReasons.style.fontSize = "2.5em";
// console.log(moreReasons);

// let whyJS = document.querySelector("h3");
// console.log(whyJS);

// whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
// console.log(whyJS);

// let highlight = document.querySelector(".highlight");
// highlight.style.backgroundColor = "#ffFf82";

// let mainImage = document.querySelector("img");
// console.log(mainImage);

// mainImage.src = "img/new-js-logo.jpeg";
// console.log(mainImage);

// mainImage.alt = "new js logo";
// console.log(mainImage);

// * Practice Exercises: JS, HTML & CSS ************************************************************
// let footer = document.querySelector("footer");
// footer.style.backgroundColor = "#d7ddf3";

// let tagline = document.querySelector(".tagline");
// tagline.innerText = "Let the flowers do the talking";

// let address = document.querySelector("address");
// console.log(address);
// address.style.lineHeight = "1.5em";
// address.style.fontSize = "2em";

// let contactHeader = document.querySelector("h3");
// contactHeader.innerHTML = "We're here for you <em>every day</em> of the week.";
// console.log(contactHeader);

// let instaIcon = document.querySelector(".fa-instagram");
// console.log(instaIcon);
// instaIcon.style.color = "#d45bb9";

// let fbIcon = document.querySelector(".fa-facebook");
// fbIcon.style.color = "#6a99b5";

// let openHours = document.querySelector(".contact p");
// openHours.style.border = "1px solid #d45bb9";
// openHours.style.padding = "1em";
// console.log(openHours);

// * DOM Events Event Listeners & Handlers ************************************************************
// let button = document.querySelector("button");
// let special = document.querySelector("special");

// button.addEventListener("click", function () {
//   special.innerText = "Fuji apples on sale!!";
//   special.style.fontSize = "3em";
//   button.classList.add("deemphasize-button");
// });

// let title = document.querySelector("h1");
// title.addEventListener("mouseover", function () {
//   title.innerText = "Let's Party!!";
//   title.style.color = "maroon";
// });

// let darkModeButton = document.querySelector(".dark-mode");
// let body = document.querySelector("body");

// darkModeButton.addEventListener("click", function () {
//   body.classList.add("dark-palette");
// });

// let lightModeButton = document.querySelector(".light-mode");

// lightModeButton.addEventListener("click", function () {
//   body.classList.remove("dark-palette");
// });

// darkModeButton = document.querySelector(".dark-mode");
let theme = document.querySelector("body");

// darkModeButton.addEventListener("click", function () {
//   if (theme.classList.contains("dark-palette")) {
//     theme.classList.remove("dark-palette");
//   } else {
//     theme.classList.add("dark-palette");
//   }
// });

// darkModeButton.addEventListener("click", function () {
//   if (theme.classList.contains("dark-palette")) {
//     theme.classList.remove("dark-palette");
//     darkModeButton.innerText = "Dark Mode";
//   } else {
//     theme.classList.add("dark-palette");
//     darkModeButton.innerText = "Light Mode";
//   }
// });

// * Click Event Kitty ************************************************************
// let button = document.querySelector(".show-cat");
// console.log(button);

// let cat = document.querySelector(".cat");
// console.log(cat);

// button.addEventListener("click", function () {
//   if (cat.classList.contains("show")) {
//     cat.classList.remove("show");
//     button.innerText = "Wait, come back!!";
//     button.classList.add("disappear");
//   } else {
//     cat.classList.add("show");
//     button.innerText = "Shoo, cat!!";
//     button.classList.remove("disappear");
//   }
// });

// * Practice Exercises: Events & Event Listeners ************************************************************
// let fans = document.querySelector(".fans");
// fans.addEventListener("mouseover", function () {
//   fans.innerText = "123K";
// });

// let fish = document.querySelector(".fish");
// fish.addEventListener("mouseover", function () {
//   fish.innerText = "47K";
// });

// let pets = document.querySelector(".pets");
// pets.addEventListener("mouseover", function () {
//   pets.innerText = "20K";
// });

// let toggle = document.querySelector("#toggle");

// let ball = document.querySelector(".ball");

// let catName = document.querySelector("h1");

// body = document.querySelector("body");
// console.log(catName);

// toggle.addEventListener("click", function () {
//   if (body.classList.contains("light")) {
//     body.classList.remove("light");
//     ball.classList.remove("move-right");
//     catName.innerText = "Stealth Quincy";
//   } else {
//     body.classList.add("light");
//     ball.classList.add("move-right");
//     catName.innerText = "Party Quincy";
//   }
// });

// let button = document.querySelector(".got-this");

// let modal = document.querySelector(".modal");

// let modalX = document.querySelector(".modal-x");

// button.addEventListener("click", function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!";
// });

// modalX.addEventListener("click", function () {
//   modal.classList.remove("show-modal");
//   button.innerText = "Who's got this?";
// });

// * Practice Exercises: Events & Event Listeners ************************************************************
// let welcome = function (name) {
//   console.log(`Hi, ${name}. Have a great day!`);
// };

// welcome("Vera"); // Welcome, Vera. Have a great day!

// let addTogether = function (num1, num2) {
//   console.log(num1 + num2);
// };

// addTogether(5, 10); // 15

// //! Return Key
// addTogether = function (num1, num2) {
//   return num1 + num2;
// };

// alert(addTogether(2, 2));
// console.log(addTogether(4, 8));
// let lunchForTwo = addTogether(5, 4);
// console.log(lunchForTwo);

// * What's Your Function ************************************************************
// let startMyDay = function () {
//   console.log("Time for coffee!!");
// };

// startMyDay();

// let favoriteCookie = function (cookie) {
//   console.log(`My favorite cookie is ${cookie}`);
// };

// favoriteCookie("chocolate chip");

// let introduce = function (name, occupation) {
//   console.log(`My name is ${name} and I am a ${occupation}`);
// };

// introduce("Laura", "Software Developer");
// introduce("Cameron", "Small Business Owner");

// let hydrationFeedback = function () {
//   let numGlasses = Number(
//     prompt("How many glasses of water did you drink today?")
//   );
//   if (numGlasses >= 8) {
//     console.log("Way to go!! You are hydrated!!");
//   } else {
//     console.log("Not bad...let't try for more H20 tomorrow!!");
//   }
// };

// hydrationFeedback();

// * Budget Your Vacay ************************************************************
// let tripInfoButton = document.querySelector(".trip-info");

// let dailyBudget = document.querySelector(".daily-budget");

// let tripInfo = function () {
//   let totalBudget = Number(prompt("What is your total budget?"));
//   let accommodation = Number(prompt("What are your accomodation costs?"));
//   let numDays = Number(prompt("How many days does your trip last?"));

//   calculateDailyBudget(totalBudget, accommodation, numDays);
// };

// let calculateDailyBudget = function (totalBudget, accommodation, numDays) {
//   let daily = ((totalBudget - accommodation) / numDays).toFixed(2);

//   dailyBudget.innerHTML = `You can spend $${daily} a day on food and fun!!`;
// };

// tripInfoButton.addEventListener("click", tripInfo);

// * Practice Exercises: Function ************************************************************
// let shoutIt = function (name) {
//   let shout = `Hello ${name}, nice to meet you!`.toUpperCase();
//   return shout;
// };

// console.log(shoutIt("Sheila"));

// let multiply = function (num1, num2) {
//   if (typeof num1 !== "number") {
//     return `please provide 2 numbers`;
//   } else if (typeof num2 !== "number") {
//     return `2 numbers are needed`;
//   }

//   return num1 * num2;
// };

// console.log(multiply(2, 2));
// console.log(multiply("math", 2));
// console.log(multiply(2, "huh?"));

// let response = document.querySelector(".response");
// let showGuess = document.querySelector(".show-guess");
// let num = Number(prompt("Guess a number between 1-25. :)"));

// function guessNumber(name, num) {
//   var randomNumber = Math.floor(Math.random() * 26); // This will produce a number between 1 and 25 - this line is error free :)

//   if (num > 25) {
//     response.innerText = "We need a number between 1 and 25.";
//   } else if (num < 1) {
//     response.innerText = "We need a number between 1 and 25.";
//   }

// We've got a number between 1 and 25, let's do this.
//   showGuess.innerText = num;

//   if (num === randomNumber) {
//     response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`;
//   } else if (num < randomNumber) {
//     response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`;
//   } else if (num > randomNumber) {
//     response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`;
//   } else {
//     response.innerText = `That's not a number, {name}!`;
//   }
// }

// guessNumber(Octavia, 7);

// * Events with Parameters ************************************************************
// let body = document.querySelector("body");
// let season = document.querySelector("#season");

// document.addEventListener("keydown", function (e) {
//   if (e.key === "s") {
//     body.classList.add("spring-theme");
//   } else if (e.key === "a") {
//     if (this.body.classList.contains("spring-theme")) {
//       body.classList.remove("spring-theme");
//       body.classList.add("autumn-theme");
//     }
//   }
// });

// season.addEventListener("change", function (e) {
//   selection = e.target.value;
//   if (selection === "spring") {
//     body.classList.add("spring-theme");
//   } else if (selection === "autumn") {
//     if (this.body.classList.contains("spring-theme")) {
//       body.classList.remove("spring-theme");
//       body.classList.add("autumn-theme");
//     }
//   }
// });

// * Function Powered Modal ************************************************************
// let button = document.querySelector(".got-this");
// let modal = document.querySelector(".modal");
// let modalX = document.querySelector(".modal-x");

// button.addEventListener("click", function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!";
// });

// modalX.addEventListener("click", function () {
//   closeModal();
//   //   modal.classList.remove("show-modal");
//   //   button.innerText = "Who's got this?";
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     console.log("Escape key pressed");
//   }
//   if (modal.classList.contains("show-modal")) {
//     closeModal();
//     // modal.classList.remove("show-modal");
//     // button.innerText = "Who's got this?";
//   }
// });

// let closeModal = function () {
//   modal.classList.remove("show-modal");
//   button.innerText = "Who's got this?";
// };

// let openModal = function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!";
// };

// * Subscripton Calculator ************************************************************
// let subTypeElement = document.querySelector("#subscription");
// let subDurationElement = document.querySelector("#months");
// let result = document.querySelector(".result");
// let subType = "basic";
// let subDuration = Number(1);

// subTypeElement.addEventListener("change", function (e) {
//   subType = e.target.value;
//   updateSubscriptionDiv();

// });

// subDurationElement.addEventListener("change", function (e) {
//   subDuration = Number(e.target.value);
//   updateSubscriptionDiv();

// });

// let updateSubscriptionDiv = function () {
//   let monthlyCost = 5;
//   if (subType === "standard") {
//     monthlyCost = 7;
//   } else if (subType === "premium") {
//     monthlyCost = 10;
//   }

//   let total = subDuration * monthlyCost;
//   result.innerText = `You have chosen a ${subDuration} month ${subType}
//     plan for $${total}`;
// };

// * Arrays ************************************************************
let dressSizes = [8, 16, 2, 24, "small", "medium"];
dressSizes.push("large"); //adds to the end of the array
dressSizes.pop(); //takes the last size out of the array

dressSizes.forEach(function (size, index) {
  console.log(`${index + 1}. Sizes ${size}`); //the list will start at 1. instead of 0.
});

// for (let size of dressSizes) {
//   console.log(`This dress is size ${size}`);
// }

let timeOfDay = [6, "noon", 8, "morning"];

//to determine lenght of array = .length property
console.log(timeOfDay.length);

//to identify index positioning of an element
console.log(timeOfDay[2]);

//replace an array element
timeOfDay[2] = "midnight";
console.log(timeOfDay);

//see if an element is included in an array
console.log(timeOfDay.includes("midnight"));

//splice - remove
timeOfDay.splice(0, 2); //index position to start, # of elements to remove
console.log(timeOfDay);

//splice - replace
timeOfDay.splice(0, 2, "evening", 10);

//splice - add (without deleting or replacing)
timeOfDay.splice(4, 0, "twilight", 2, 9);

//indexOf
let employeeAges = [15, 36, 78, 25, 17, 42];

let age = employeeAges.indexOf(36);
console.log(age); //1

// if the element does not exist in the array -1 will be returned

// * Loops ************************************************************
timeOfDay = [6, "noon", 8, "morning", "evening", 12];

for (let time of timeOfDay) {
  console.log(`It is ${time}`);
}

timeOfDay.forEach(function (time, index) {
  console.log(`The ${time} element is at position ${index}.`);
});

employeeAges = [15, 36, 78, 25, 17, 42];
let adultAge = employeeAges.filter(function (item) {
  return item >= 18;
});
console.log(adultAge);

//can also use .includes()
//example return item.includes("Martin")

// * Working with Arrays ************************************************************
let hobbies = [
  "gardening",
  "painting",
  "golf",
  "knitting",
  "coloring",
  "swimming",
];

console.log(hobbies.length);
hobbies.push("pickleball");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "clogging", "bird watching");
hobbies.shift();
hobbies.unshift("dancing");
console.log(hobbies);

let goals = ["code", "fruit", "sleep"];
let allTheThings = [...hobbies, ...goals];
let num = allTheThings.indexOf("clogging");
allTheThings.splice(2, 1);
console.log(allTheThings);

let plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});

console.log(plans);
