// Variables
let x = 2
    x = 3
console.log(x)

const fruit = "orange"
console.log(fruit)

var isLoggedin = true
  isLoggedin = false
console.log(isLoggedin)

// javascript syntax
let isAvailable3;
let IsAvailable3
let is_3_available
 
// data type
let num = 4697  // number
let word = 'Hello World 3058053 $&#%'  // string
let isBoolean = true // Boolean true/false
let p = null;  //null - intentional absence of any value
let w;  // undefined value/data type
let fruits = ["orange", 10, "cherry"]  //array

function addTwoNumbers(num1, num2){
  return num1 + num2
}
let sum = addTwoNumbers(8, 10)
console.log(sum)

/* ==================================================
   JAVASCRIPT OPERATORS
   ================================================== */
// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus (Remainder):", a % b); // 0
console.log("Exponentiation:", a ** 2); // 100

// Assignment Operators
let c = 10;
c ++; // Increment. this is the same as C + 1
c --; // Decrement. this is the same as C - 1
c += 5; // Equivalent to c = c + 5 (15)
c -= 5; // Equivalent to c = c - 5 (5)

// Comparison Operators
console.log("Equal value:", a == "10"); // true (checks value only)
console.log("Equal value & type:", a === "10"); // false (checks value and type)
console.log("Not equal:", a !== b); // true
console.log("Greater than:", a > b); // true
console.log("Lesser than:", a < b); // false
console.log("Greater or Equal to:", a >= b); // true
console.log("Lesser or Equal to:", a <= b); // false


// Logical Operators
let isAdult = true;
let hasID = false;
console.log("AND (&&):", isAdult && hasID); // false
console.log("OR (||):", isAdult || hasID); // true
console.log("NOT (!):", !isAdult); // false


/* ==================================================
   CONDITIONALS (If, Else if, Else, Switch)
   ================================================== */
let age = 18;

// If / Else statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}


/* ==================================================
   LOOPS IN JAVASCRIPT
   ================================================== */
// For Loop (runs a block of code a specific number of times)
console.log("For Loop:");
for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}

// While Loop (runs as long as a condition is true)
console.log("While Loop:");
let count = 1;
while (count <= 3) {
  console.log("While Count:", count);
  count++;
}


/* ==================================================
   ARRAYS IN JAVASCRIPT
   ================================================== */
let colorsArr = ["Red", "Green", "Blue"];

// Accessing elements
console.log("First color:", colorsArr[0]); // "Red"

// Adding/Removing elements
colorsArr.push("Yellow"); // Adds to the end
colorsArr.unshift("Black"); // Adds to the beginning
colorsArr.pop(); // Removes from the end
colorsArr.shift(); // Removes from the beginning
console.log("Updated Colors:", colorsArr);

// Iterating over an array (forEach)
colorsArr.forEach(function(color, index) {
  console.log(`Color at index ${index} is ${color}`);
});

// Map method (creates a new array based on the original)
let upperColors = colorsArr.map(color => color.toUpperCase());
console.log("Uppercase Colors:", upperColors);


/* ==================================================
   DOCUMENT OBJECT MODEL (DOM)
   (Connected to page.html to show functional examples)
   ================================================== */
// Selecting Elements
// Ensure your HTML has elements with these IDs/Classes
let mainTitle = document.getElementById("main-title");
let descriptions = document.getElementsByClassName("desc");
let firstBox = document.querySelector(".box"); // Selects the first matching element
let allBoxes = document.querySelectorAll(".box"); // Selects all matching elements

// Modifying Elements
if (mainTitle) {
  mainTitle.textContent = "Welcome to JavaScript Dom Manipulation";
  mainTitle.style.color = "blue"; // Changing CSS styles via JS
}


/* ==================================================
   TRAVERSING ELEMENTS
   ================================================== */
let parentList = document.getElementById("item-list");
if (parentList) {
  console.log("Parent's children:", parentList.children);
  console.log("First Child:", parentList.firstElementChild);
  console.log("Last Child:", parentList.lastElementChild);
  
  let firstItem = parentList.firstElementChild;
  if(firstItem) {
    console.log("Sibling:", firstItem.nextElementSibling);
    console.log("Parent node:", firstItem.parentElement);
  }
}


/* ==================================================
   JAVASCRIPT FORM
   ================================================== */
// Handling form data
let myForm = document.getElementById("my-form");
let nameInput = document.getElementById("name-input");

if (myForm) {
  myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload on submit
    console.log("Form submitted!");
    console.log("User entered name:", nameInput.value);
    
    // Clear input after submit
    nameInput.value = "";
  });
}


/* ==================================================
   EVENT HANDLING
   ================================================== */
let actionBtn = document.getElementById("action-btn");

if (actionBtn) {
  // Click Event
  actionBtn.addEventListener("click", function() {
    alert("Button was clicked!");
  });

  // Mouse Over Event
  actionBtn.addEventListener("mouseover", function() {
    actionBtn.style.backgroundColor = "yellow";
  });

  // Mouse Out Event
  actionBtn.addEventListener("mouseout", function() {
    actionBtn.style.backgroundColor = ""; // Resets color
  });
}


/* ==================================================
   STORING DATA IN THE BROWSER
   ================================================== */
// Local Storage (Data persists even after browser is closed)
localStorage.setItem("username", "JohnDoe");
let storedName = localStorage.getItem("username");
console.log("Data from Local Storage:", storedName);
// localStorage.removeItem("username"); // To delete a specific item
// localStorage.clear(); // To clear everything

// Session Storage (Data is cleared when the browser tab is closed)
sessionStorage.setItem("sessionID", "12345XYZ");
console.log("Data from Session Storage:", sessionStorage.getItem("sessionID"));


/* ==================================================
   ES6 FEATURES
   ================================================== */
// Template Literals (Using backticks for string interpolation)
let userName = "Alice";
let greeting = `Hello, ${userName}! Welcome to ES6.`;
console.log(greeting);

// Arrow Functions (Shorter syntax)
const multiply = (x, y) => x * y;
console.log("Arrow Function Multiplication:", multiply(5, 4));

// Destructuring Arrays
let fruitsArr2 = ["Apple", "Banana", "Orange"];
let [fruit1, fruit2] = fruitsArr2;
console.log("Destructured Array:", fruit1, fruit2);

// Destructuring Objects
let person = { name: "Bob", personAge: 30, city: "New York" };
let { name, city } = person;
console.log("Destructured Object:", name, city);

// Spread Operator (Used to expand arrays or objects)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // Combines arrays
console.log("Spread Operator Array:", arr2);


/* ==================================================
   MODULES (Export & Import)
   ================================================== */
/* 
  Note: To use modules in HTML, add type="module" to the script tag:
  <script type="module" src="jsclass.js"></script>
*/

// Exporting (Imagine this is in a file called mathUtils.js)
// export const pi = 3.14159;
// export function square(x) { return x * x; }

// Importing (Imagine this is in your main file)
// import { pi, square } from './mathUtils.js';
// console.log("Imported module value:", pi);


/* ==================================================
   ASYNCHRONOUS JAVASCRIPT
   ================================================== */
// Promises
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to see the reject block run
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000); // Wait 2 seconds
});

// Consuming the Promise
myPromise
  .then(result => console.log("Promise Resolved:", result))
  .catch(error => console.log("Promise Rejected:", error));

// Async / Await (A cleaner way to write promises)
async function fetchData() {
  try {
    // Simulating fetching data from an API
    let response = await new Promise(resolve => setTimeout(() => resolve("Async/Await Data"), 1500));
    console.log("Async/Await Result:", response);
  } catch (error) {
    console.log("Async/Await Error:", error);
  }
}
fetchData();


/* ==================================================
   ERROR HANDLING
   ================================================== */
try {
  // Code that might throw an error
  let nonExistentVar;
  console.log(nonExistentVar.toUpperCase()); 
} catch (error) {
  // Code to handle the error gracefully
  console.log("An error occurred! Don't panic.");
  console.log("Error details:", error.message);
} finally {
  // Code that always runs, regardless of success or error
  console.log("This will run no matter what (Finally block).");
}





