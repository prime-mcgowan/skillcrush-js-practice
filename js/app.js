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
// let hobbies = [
//   "gardening",
//   "painting",
//   "golf",
//   "knitting",
//   "coloring",
//   "swimming",
// ];

// console.log(hobbies.length);
// hobbies.push("pickleball");
// console.log(hobbies[2]);
// hobbies.pop();
// hobbies.splice(2, 0, "clogging", "bird watching");
// hobbies.shift();
// hobbies.unshift("dancing");
// console.log(hobbies);

// let goals = ["code", "fruit", "sleep"];
// let allTheThings = [...hobbies, ...goals];
// let num = allTheThings.indexOf("clogging");
// allTheThings.splice(2, 1);
// console.log(allTheThings);

// let plans = allTheThings.map(function (item) {
//   return `I can't wait to start ${item}`;
// });

// console.log(plans);

// * Looping Arrays ************************************************************
var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#",
];

// for (let time of timeOfDay) {
//     console.log(`It is ${time}`);
//   }

for (let language of programmingLanguages) {
  console.log(`Here is an example of a programing langugage: ${language}`);
}

// timeOfDay.forEach(function (time, index) {
//     console.log(`The ${time} element is at position ${index}.`);
//   });

programmingLanguages.forEach(function (language, index) {
  console.log(`${index + 1}. ${language}`.toUpperCase());
});

// employeeAges = [15, 36, 78, 25, 17, 42];
// let adultAge = employeeAges.filter(function (item) {
//   return item >= 18;
// });
// console.log(adultAge);

let updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});
console.log(updatedLanguages);

// * Generate a Grocery List ************************************************************
var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];

// console.log(groceries.length);

let deleteDuplicates = function (list) {
  let cleanList = [];

  for (let item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

let newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);

// programmingLanguages.forEach(function (language, index) {
//     console.log(`${index + 1}. ${language}`.toUpperCase());
//   });

newGroceries.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});

// * Practice: Arrays & Loops ************************************************************
var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books",
];

// stuff.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });

// let removeItem = function (array, item) {
//   let index = array.indexOf(item);

//   //   the -1 means the item was not found in the array
//   if (index === -1) {
//     console.log(`Sorry, ${item} is not on the list`);
//   } else {
//     array.splice(index, 1);
//     console.log(`Removing ${item}`);
//   }
// };

// removeItem(stuff, "coffee");
// removeItem(stuff, "hat");
// console.log(stuff);

let filterStuff = function (list) {
  let sArray = [];

  for (let item of list) {
    if (item.includes("s")) {
      sArray.push(item);
    }
  }
  return sArray;
};

let newList = filterStuff(stuff);
console.log(newList);

let updatedList = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(updatedList);

// * Scope, Input, & Creating Elements ************************************************************
//Globally Scoped Variable
const numOfDrinks = 5;
// ! if you try to reassign the variable with const...
// numOfDrinks = 7;
// console.log(numOfDrinks);
// SyntaxError: /app.js: "numOfDrinks" is read-only

//Function Scope =  tea = inside of a function and cannot be accessed outside of it
let drinks = function () {
  let tea = 6 + numOfDrinks;
  console.log(tea);
};

// Block Scopt = soda = inside an if statement (or could be a loop)
if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
// lemon-lime

//! if you try to access soda outside the block...
console.log(soda);
// ReferenceERROR: soda not defined

// * GATHER INPUT & CREATE ELEMENTS ****************************************
// // add button
// const addShowButton = document.querySelector(".add");
// // label for the add button
// const showInput = document.querySelector(".add-show input");
// // unordered list (not yet visible)
// const showList = document.querySelector(".show-list");
// // span class for number of favorite shows
// const showCount = document.querySelector(".number");

// // value property will capture the value entered into the input box:
// addShowButton.addEventListener("click", function () {
//   const show = showInput.value;
//   // use the value to populate a list
//   if (show !== "") {
//     // next line creates the li in the html
//     let listItem = document.createElement("li");
//     // set the li to the value of the input (show the user inputted)
//     listItem.innerText = show;
//     // show will will be added to the list (points to the ul/li)
//     showList.append(listItem);
//     //  the length property reads the number of shows and displays the result
//     let shows = document.querySelectorAll(".show-list li");
//     showCount.innerText = shows.length;
//   }
// });

// * Assemble a Potluck Guest List ****************************************
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

// addGuestButton.addEventListener("click", function () {
//   let guest = guestInput.value;
//   //   console.log(guest);
//   if (guest !== "") {
//     addToList(guest);
//     updateGuestCount();
//     clearInput();
//   }
// });

// const clearInput = function () {
//   guestInput.value = "";
// };

// const addToList = function (guest) {
//   listItem = document.createElement("li");
//   listItem.innerText = guest;
//   guestList.append(listItem);
// };

// const updateGuestCount = function () {
//   let guests = document.querySelectorAll(".guest-list li");
//   guestCount.innerText = guests.length;
//   if (guests.length === 2) {
//     addGuestButton.classList.add("hide");
//     guestInput.classList.add("hide");
//     guestInputLabel.classList.add("hide");
//     guestFull.classList.remove("hide");
//   }
// };

// * Assign Potluck Dish ****************************************
// let assignItems = function () {
//   let potluckItems = [
//     "veggies",
//     "dip",
//     "chips",
//     "burgers",
//   ];
//   let allGuests = document.querySelectorAll(".guest-list li");
//   for (let guest of allGuests) {
//     let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
//     let randomPotluckItem = potluckItems[randomPotluckIndex];

//     let listItem = document.createElement("li");
//     listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
//     assignedItems.append(listItem);
//     potluckItems.splice(randomPotluckIndex, 1);
//   }
// };

// assignButton.addEventListener("click", function () {
//   assignItems();
//   assignButton.disabled = true;
// });

// * Scope Practice ****************************************

// // * Math.min & Math.max Practice
// const button = document.querySelector(".show-results");
// const results = document.querySelector(".results");
// const expensesList = document.querySelector(".expenses");

// const expenses = [
//   9.99, 25.8, 144.39, 12.98, 4.99, 38.75, 14.5, 99.99, 75.4, 4.75, 62.88,
// ];

// // Display your expenses in a list
// for (let exp of expenses) {
//   let li = document.createElement("li");
//   li.innerText = `$ ${exp}`;
//   expensesList.append(li);
// }

// // Write showMinMax function here
// const showMinMax = function (expenses) {
//   let min = Math.min(...expenses);
//   let max = Math.max(...expenses);

//   let minListItem = document.createElement("li");
//   minListItem.innerText = `Min: $ ${min}`;

//   let maxListItem = document.createElement("li");
//   maxListItem.innerText = `Max: $ ${max}`;

//   results.append(minListItem, maxListItem);
//   results.classList.remove("hide");
// };

// // Write click event listener for 'button' and call the showMinMax function
// button.addEventListener("click", function () {
//   showMinMax(expenses);
//   button.disabled = true;
// });

const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
total = document.querySelector(".total");

// button.addEventListener("click", function () {
//   mixList.classList.remove("hide");
//   button.classList.add("hide");

//   mixInfo(epicMix);

//   total.innerText = `${epicMix.length} great songs!!`;
// });

let mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};

// * Intro to Objects ****************************************
// object literal
const house = {
  size: 1500,
  color: "blue",
  windows: 20,
};

console.log(house.size);

//key-value pairs = windows (key) and 20 (value)
house.size = 1500;
house.color = "blue";
house.windows = 20;

// change a properties value
house.color = "green";

// bracket notation to access & modify properties (used when looping)
house["windows"] = 17;

// method = when a function is the property of an object
house.windowWash = function () {
  if (this.window > 15) {
    return `That's a lot of windows to wash`;
  }
};

console.log(house.windowWash());

// const cat = {};

// cat.name = "Fred";
// cat.nickname = "Flooficus";
// cat.age = 5;
// cat.isSleeping = true;
// cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"];
// cat.pet = function () {
//   return "purrrrrrrrr";
// };

// console.log(cat);
// console.log(cat.nickname);
// console.log(cat.favoriteToys[2]);
// console.log(cat["name"]);

// object literal
let cat = {
  name: "Fred",
  nickname: "Flooficus",
  age: 5,
  isSleeping: true,
  favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
  pet: function () {
    return "purrrrrrrr";
  },
};
console.log(cat);

cat.isSleeping = false;
cat["color"] = "orange";

console.log(cat);

// the code below can also be placed in the cat object literal
cat.play = function () {
  this.isSleeping = false;
  return `${this.nickname} is awake and playing!!`;
};

console.log(cat.play());

// Operators = +, -, /, and %

let paperclips = 10;
paperclips += 2;
console.log(paperclips);

// * Properties and Dot Notation ****************************************
// const topicElement = document.querySelector(".topic");
// const countElement = document.querySelector(".count");
// const body = document.querySelector("body");
// const success = document.querySelector(".success");
// const dance = document.querySelector(".dance");

// const learning = {
//   topic: "JS",
//   learningGoals: ["html", "css", "js", "react"],
//   category: "Front End Developement",
//   topicImportance: "high",
//   hoursThisWeek: 2,
//   weeklyHourGoal: 7,
//   achievedStudyGoal: false,
//   addStudyTime: function (hours) {
//     this.hoursThisWeek += hours;
//     if (this.hoursThisWeek >= this.weeklyHourGoal) {
//       this.achievedStudyGoal = true;
//       this.celebrate();
//     }
//   },
//   celebrate: function () {
//     body.classList.add("celebrate");
//     success.classList.remove("hide");
//     dance.classList.remove("hide");
//   },
// };

// console.log(learning);

// learning.topic = "JavaScript";
// // splice(index of element to be removed, quantity of elements to be removed)
// learning.learningGoals.splice(1, 1);
// console.log(learning);

// topicElement.innerText = `I'm learning ${learning.topic}`;
// topicElement.classList.remove("hide");

// countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
// countElement.classList.remove("hide");

// learning.addStudyTime(10);

// * Practicing Objects and Methods ****************************************
// const currentlyReading = {
//   title: "The Fifth Season",
//   author: "N.K. Jemisin",
//   series: "Broken Earth Trilogy",
//   pages: 512,
//   publicationDate: "August 4th, 2015",
//   currentChapter: 8,
//   totalChapters: 23,
// };

// console.log(currentlyReading.title);
// console.log(currentlyReading["pages"]);

// currentlyReading.awards = "Hugo Awared for Best Novel (2016)";

// console.log(currentlyReading);

// currentlyReading.updateChapter = function (chapterNum) {
//   this.currentChapter = chapterNum;
// };

// currentlyReading.updateChapter(11);

// console.log(currentlyReading);

// const bird = {
//   name: "Eliza",
//   type: "Budgie",
//   hungerScale: 7, // Scale from 0 (full) to 10 (starving)
//   isHappy: function () {
//     if (this.hungerScale <= 3) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// bird.eat = function () {
//   if (this.hungerScale === 0) {
//     console.log(`${this.name} is full.`);
//   } else {
//     this.hungerScale -= 1;
//     console.log("Nom nom nom");
//   }
// };

// bird.eat();
// console.log(bird.isHappy());

// * Factory Function = create multiple objects ****************************************
// const createIceCream = function (flavor, scoops, sprinkles) {
//   const iceCream = {
//     flavor: flavor,
//     scoops: scoops,
//     addSprinkles: sprinkles,
//   };
//   return iceCream;
// };

// const vanilla = createIceCream("vanilla", 2, true);
// const strawberry = createIceCream("strawberry", 1, true);

// console.log(vanilla, strawberry);

// for (let key in vanilla) {
//   console.log(key, vanilla[key]);
// }

// const createOutfit = function () {
//   const outfit = {
//     shirt: "green",
//     pants: "blue",
//     isNew: false,
//     showOff: function () {
//       this.isNew = true;
//       console.log("Show-off your new outfit!!");
//     },
//   };
//   return outfit;
// };

// console.log(createOutfit());

// const tuesday = createOutfit();
// tuesday.shirt = "white";
// tuesday.pants = "black";

// console.log(tuesday);

// factory function with parameters
// const createOutfit = function (shirt, pants) {
//   const outfit = {
//     shirt: shirt,
//     pants: pants,
//     isNew: false,
//     showOff: function () {
//       console.log("Show-off your new outfit!!");
//     },
//   };
//   return outfit;
// };

// // declare new objects
// const tuesday = createOutfit("white", "black");
// console.log(tuesday);

// const wednesday = createOutfit("pink", "gray");
// console.log(wednesday);

// // for...in loop

// // just want the keys
// for (let key in tuesday) {
//   console.log(key);
// }

// // just want values ... the [] tell JS that's what you are looking for
// for (let key in tuesday) {
//   console.log(tuesday[key]);
// }

// // keys and values
// for (let key in tuesday) {
//   console.log(key, tuesday[key]);
// }

// // for...of to loop through multiple objects in an array
// const outfitArray = [tuesday, wednesday];

// for (let outfit of outfitArray) {
//   console.log(outfit);
// }

// // for...of and for...in loops to isolate the keys and values of multiple objects
// for (let outfit of outfitArray) {
//   for (let key in outfit) {
//     console.log(key, outfit[key]);
//   }
// }

// // factory function pattern with pets
// const statusButton = document.querySelector("button");
// const pets = document.querySelector(".all-pets");

// const createPet = function (name, species) {
//   const pet = {
//     name: name,
//     species: species,
//     isTired: 5,
//     sleep: function () {
//       console.log(`${this.name} needs a nap. Zzz...`);
//       this.isTired = 1;
//     },
//     play: function () {
//       if (this.isTired === 10) {
//         console.log("Too tired to play.");
//         this.sleep();
//       } else {
//         console.log(`Yay!! ${this.name} loves to play!!`);
//         this.isTired += 1;
//       }
//     },
//   };

//   return pet;
// };

// const sora = createPet("Sora", "ferret");
// const clover = createPet("Clover", "rabbit");
// const baxter = createPet("Baxter", "hamster");
// const cleo = createPet("Cleo", "rat");
// const francine = createPet("Francine", "turtle");

// // console.log(sora, clover, baxter, cleo, francine);

// // clover.sleep();
// // baxter.play();

// // console.log(clover, baxter);

// clover.isTired = 8;
// francine.isTired = 9;

// // console.log(sora, clover, baxter, cleo, francine);

// // an array of pet objects as elements
// const allPets = [sora, clover, baxter, cleo, francine];

// // console.log(allPets);

// const showPets = function (petArray) {
//   pets.innerHTML = "";

//   for (let pet of petArray) {
//     //status is a variable
//     let status = "Ready to play!!";
//     //isTired is a property
//     if (pet.isTired >= 7) {
//       status = "sleeping";
//     }
//     const li = document.createElement("li");
//     li.innerHTML = `<span class="pet-name"> ${pet.name}</span>, the ${pet.species}, is ${status}`;
//     pets.append(li);
//   }
// };

// statusButton.addEventListener("click", function () {
//   showPets(allPets);
// });

// * Practice Exercies: Factory Functions ****************************************
const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color,
  };
  return vehicle;
};

const van = createVehicle("van", 4, "blue");
const motorcycle = createVehicle("motorcylce", 2, "black");
const bike = createVehicle("bike", 2, "yellow");

for (let key in van) console.log(key); //keys
for (let key in van) console.log(van[key]); //values

const myVehicles = [van, motorcycle, bike];
for (let vehicle of myVehicles) {
  console.log(vehicle); // multiple objects in an array
}
// console.log(myVehicles);

const attentionButton = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

//add a property called needsRepair to bike and van objects
// bike.needsRepair = true;
// van.needsRepair = true;

// attentionButton.addEventListener("click", function () {
//   //clears the list
//   repairList.innerHTML = "";
//   //grabs the repair list
//   const vehicleRepairList = myVehicles.filter(function (vehicle) {
//     return vehicle.needsRepair === true;
//   });
//   for (let vehicle of vehicleRepairList) {
//     let li = document.createElement("li");
//     li.innerHTML = `My ${vehicle.type} needs some love.`;
//     repairList.append(li);
//   }
// });

// * Working with APIs ****************************************
//the async allows for asynchronous communication between your program and the API
const getData = async function () {
  //the variable created will hold the response from the API
  //the await keyword tells the program to wait on that line until the API data is received
  const res = await fetch("https://api.quotable.io/quotes?author=maya-angelou");
  //json turns the data into a proper JavaScript object that can be used in your code
  //this is another asynch action so the await keyword is used again
  const data = await res.json();
  //   console.log(data);
};

getData();

let imageButton = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch(" https://picsum.photos/v2/list?limit=100");

  const images = await res.json();
  //   console.log(images);

  selectRandomImage(images);
};

const selectRandomImage = function (images) {
  let randomIndex = Math.floor(Math.random() * images.length);
  //   console.log(randomIndex);
  // use randomIndex to grab a single image from your images array
  let randomImage = images[randomIndex];
  //   console.log(randomImage);

  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;

  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

// imageButton.addEventListener("click", function () {
//   getImage();
// });

// * Practice Exercies: Intro to  APIs ****************************************
// * Random User Generator *******************************************************
// const randomFolks = document.querySelector(".random-peeps");
// const selectUserNumber = document.querySelector("#users");

// const fetchData = async function (numUsers) {
//   const usersRequest = await fetch(
//     `https://randomuser.me/api?results=${numUsers}`
//   );
//   const userData = await usersRequest.json();

//   //property name for the array of objecgts = results
//   //"map" to the property
//   const userResults = userData.results;
//   displayUsers(userResults);
// };

// fetchData(4);

// const displayUsers = function (userResults) {
//   randomFolks.innerHTML = "";

//   //loop over userResults...for every user select their: name, country and avatar url w/ size of medium
//   //save the results of these three properties to three variables called: country, name adn imageUrl
//   for (let user of userResults) {
//     let country = user.location.country;
//     let name = user.name.first;
//     let imageUrl = user.picture.medium;
//     let userDiv = document.createElement("div");
//     userDiv.innerHTML = `<h3>${name}</h3> <p>${country}</p> <img src=${imageUrl} alt="User avatar" />`;

//     randomFolks.append(userDiv);
//   }
// };

// selectUserNumber.addEventListener("change", function (e) {
//   const numUsers = e.target.value;
//   fetchData(numUsers);
// });

// * Kindergarten List ****************************************************
const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
  const request = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"
  );

  const data = await request.json();
  //   console.log(data);
  displayContactList(data);
};

const displayContactList = function (data) {
  for (let student of data) {
    if (student.registered === "no") {
      let li = document.createElement("li");
      li.innerHTML = student.name;
      notRegistered.append(li);
    }
  }
};

getRegistrationData();
