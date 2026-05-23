# Comprehensive JavaScript Curriculum

Welcome to the detailed explanation guide for our JavaScript class. This document acts as a companion to the `jsclass.js` and `page.html` examples, breaking down each core concept so students can easily follow along.

---

## 1. Variables in JavaScript
Variables are containers for storing data values. In modern JavaScript, we use `let` and `const`.
- **`let`** allows you to declare variables that can change their values later.
- **`const`** allows you to declare variables whose values should never change (constants).
- **`var`** is the older way to declare variables and is generally avoided in modern development due to scoping and hoisting issues.

## 2. Data Types
JavaScript variables can hold different data types:
- **Number**: Integers or floating-point numbers (e.g., `10`, `3.14`).
- **String**: Text enclosed in single or double quotes (e.g., `'Hello'`).
- **Boolean**: Logical entities having two values: `true` or `false`.
- **Null**: Represents the intentional absence of any object value.
- **Undefined**: A variable that has been declared but has not yet been assigned a value.
- **Array**: A special type of object used to store multiple values in a single variable.

## 3. JavaScript Operators
Operators perform operations on variables and values. They are the essential building blocks of logic in your code.

### Arithmetic Operators
These perform basic math on your `Number` variables.
- `+` (Addition): `5 + 2 = 7`
- `-` (Subtraction): `5 - 2 = 3`
- `*` (Multiplication): `5 * 2 = 10`
- `/` (Division): `10 / 2 = 5`
- `%` (Modulus): Returns the remainder of a division. `5 % 2 = 1` (because 2 goes into 5 twice, with 1 left over).
- `**` (Exponentiation): `5 ** 2 = 25` (5 to the power of 2).

### Assignment Operators
These are used to assign values to variables.
- `=` (Basic assignment): `let x = 10;`
- `+=` (Add and assign): `x += 5;` is the exact same as `x = x + 5;`
- `-=` (Subtract and assign): `x -= 2;` is the exact same as `x = x - 2;`

### Comparison Operators
Used to compare two values. They always return a Boolean (`true` or `false`).
- `==` (Equal to): `5 == "5"` returns `true`. It only checks the value, completely ignoring the data type.
- `===` (Strict Equal to): `5 === "5"` returns `false`. **Always use this!** It strictly checks both the value and the data type.
- `!=` (Not equal to): `5 != 4` returns `true`.
- `!==` (Strict Not equal to): Checks that the value or type is not equal.
- `>`, `<`, `>=`, `<=` (Greater/Less than).

### Logical Operators
Used to combine multiple conditions together.
- `&&` (AND): Returns `true` only if **both** sides are true. (`true && false` is `false`).
- `||` (OR): Returns `true` if **at least one** side is true. (`true || false` is `true`).
- `!` (NOT): Flips the boolean. (`!true` is `false`).

## 4. Conditionals
Conditional statements allow your program to make decisions and execute different blocks of code depending on whether a condition evaluates to true or false.

### If / Else if / Else
```javascript
let time = 14;
if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```
- **`if`**: The first condition checked.
- **`else if`**: Checked only if the previous `if` was false. You can chain as many of these as you want.
- **`else`**: The ultimate fallback. Runs if all previous conditions were false.

### Switch Statement
A much cleaner way to write multiple `if / else if` statements when you are checking the exact value of a single specific variable against multiple possibilities.
```javascript
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break; // Stops checking further cases
    case 2:
        console.log("Tuesday");
        break;
    default: // Runs if no cases match
        console.log("Some other day");
}
```

## 5. Loops in JavaScript
Loops are used to execute the same block of code multiple times, usually updating a variable each time until a certain condition is met.

### The For Loop
Best used when you know **exactly how many times** you want the loop to run.
```javascript
// Structure: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log("Iteration number " + i);
}
```
1. `let i = 0`: Runs once at the start. Sets up the counter.
2. `i < 5`: The loop runs as long as this statement is true.
3. `i++`: Adds 1 to `i` after every loop cycle finishes.

### The While Loop
Best used when you want to loop until a certain condition changes, and you **aren't sure** how many iterations it will take.
```javascript
let count = 0;
while (count < 3) {
    console.log("Count is " + count);
    count++; // CRITICAL: Don't forget this, or you'll get an infinite loop!
}
```

## 6. Arrays in JavaScript
Arrays are special list-like objects that hold multiple values in a single variable. They are **zero-indexed**, meaning the first item is located at index `0`.

### Modifying Arrays
- `array.push(item)`: Adds an item to the **end** of the array.
- `array.pop()`: Removes and returns the item at the **end** of the array.
- `array.unshift(item)`: Adds an item to the **beginning** of the array.
- `array.shift()`: Removes and returns the item at the **beginning**.

### Array Iteration Methods
Modern JavaScript provides powerful ways to loop through arrays without having to write a traditional `for` loop.
- **`forEach()`**: Runs a function on every single item in the array. Great for side effects like logging or updating the DOM.
  ```javascript
  let fruits = ["Apple", "Banana"];
  fruits.forEach((fruit, index) => console.log(index, fruit));
  ```
- **`map()`**: Creates a brand new array by transforming every item in the original array. Very heavily used in modern frameworks like React.
  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map(num => num * 2); // Result: [2, 4, 6]
  ```

## 7. Document Object Model (DOM)
The DOM is a tree-like representation of your HTML page that JavaScript can interact with. It is what allows you to dynamically update the UI without reloading the page.

### Selecting Elements
- `document.getElementById('myId')`: Returns a single element with that specific ID. Very fast.
- `document.querySelector('.myClass')`: Returns the **first** element that matches the CSS selector.
- `document.querySelectorAll('p')`: Returns a NodeList (similar to an array) of **all** elements matching the selector.

### Modifying Elements
Once you have selected an element, you can manipulate it:
```javascript
let title = document.getElementById("main-title");
title.textContent = "New Title"; // Safely changes the text inside
title.innerHTML = "<span>New Title</span>"; // Changes the HTML inside (use carefully)
title.style.color = "red"; // Dynamically changes the inline CSS
title.classList.add("active"); // Adds a CSS class to the element
```

## 8. Traversing Elements
Sometimes you select an element, but you actually want to target its parent, its children, or its sibling. This is called DOM Traversal.

- **`parentElement`**: Moves one level up the HTML tree to the parent node.
- **`children`**: Returns an HTMLCollection of all child elements inside the current node.
- **`firstElementChild` / `lastElementChild`**: Grabs the very first or very last child element.
- **`nextElementSibling` / `previousElementSibling`**: Moves sideways to the next/previous element sitting at the exact same level.

## 9. JavaScript Form Handling
When users submit an HTML form, the browser's default behavior is to send a request to a server and refresh the entire page. JavaScript intercepts this so we can process data on the frontend first.

```javascript
let form = document.getElementById("my-form");
let input = document.getElementById("name-input");

form.addEventListener("submit", function(event) {
    // CRITICAL: Stops the page from automatically reloading!
    event.preventDefault(); 
    
    // Extract the exact text the user typed into the input field
    let userValue = input.value; 
    console.log("You submitted:", userValue);
});
```

## 10. Event Handling
JavaScript makes static HTML pages interactive by constantly listening for user actions (known as events).

```javascript
let btn = document.getElementById("my-btn");

// Listen for a click event
btn.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Other extremely common events:
// 'mouseover' (when the user's mouse enters the element)
// 'mouseout' (when the user's mouse leaves the element)
// 'keydown' (when the user presses down on a keyboard key)
// 'keyup' (when the user releases a keyboard key)
```

## 11. Storing Data in the Browser
You can save data directly into the user's browser storage. This is fantastic for saving user preferences (like a Dark Mode toggle), caching data, or keeping users logged in.

- **LocalStorage**: Data persists permanently until it is explicitly deleted by your JavaScript code or by the user clearing their browser cache.
  ```javascript
  localStorage.setItem("theme", "dark");
  let currentTheme = localStorage.getItem("theme"); // Returns "dark"
  ```
- **SessionStorage**: Works exactly the same way as LocalStorage, but the data is automatically wiped out the moment the user closes the specific browser tab.

*(Important Note: These Web Storage APIs only store strings. If you want to store a complex Array or Object, you must convert it to a string using `JSON.stringify()` before saving, and convert it back using `JSON.parse()` when reading it).*

## 12. ES6 Features (Modern JavaScript)
ECMAScript 2015 (ES6) was a massive update to JavaScript that made writing code much more elegant and powerful.

### Template Literals
Say goodbye to messy string concatenation (`"Hello " + name + "!"`). Instead, use backticks `` ` `` and inject variables using `${}`.
```javascript
let name = "Alice";
console.log(`Hello ${name}! Welcome back.`);
```

### Arrow Functions
A shorter, much cleaner syntax for writing functions. They are the standard in modern libraries like React.
```javascript
// Old way
function add(a, b) { 
  return a + b; 
}

// ES6 Arrow Function (implicit return if written on one line)
const add = (a, b) => a + b;
```

### Destructuring
A lightning-fast way to extract properties from objects or arrays into distinct, standalone variables.
```javascript
let user = { name: "Bob", age: 30 };
let { name, age } = user; // Creates two new variables: name="Bob" and age=30
```

### Spread Operator (`...`)
Expands arrays or objects. It is incredibly useful for copying arrays or combining multiple sets of data.
```javascript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // Result: [1, 2, 3, 4]
```

## 13. Modules
As your JavaScript files grow huge, you should split them into smaller, isolated files called Modules.

**File 1: `math.js`**
```javascript
export const pi = 3.14;
export function add(a, b) { return a + b; }
```

**File 2: `main.js`**
```javascript
// Importing from the math.js file
import { pi, add } from './math.js';
console.log(add(pi, 2));
```
*(Remember: To use this module system natively in the browser, your HTML script tag must be explicitly told it is loading a module: `<script type="module" src="main.js"></script>`).*

## 14. Asynchronous JavaScript
JavaScript is strictly single-threaded, meaning it can only do one thing at a time. Asynchronous JS is the magic that allows you to start a long task (like downloading data from an API) and continue running the rest of your code while you wait for the server's response.

### Promises
A Promise is exactly what it sounds like—an object representing an action that hasn't finished yet, but promises to give you a result in the future. It can either be **Resolved** (success) or **Rejected** (failure).
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json()) // Runs if the promise resolves successfully
    .catch(error => console.log("Failed!", error)); // Runs if the promise is rejected
```

### Async / Await
A much cleaner, modern way to write Promises, introduced in ES8. It makes asynchronous code read exactly like standard, synchronous code.
```javascript
async function getData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json(); // Waits for the data to parse
        console.log(data);
    } catch (error) {
        console.log("Failed!", error);
    }
}
```

## 15. Error Handling
Your code will not always work perfectly. APIs fail, networks drop, and users enter bad data. `try...catch` prevents your entire application from crashing when a single thing goes wrong.

```javascript
try {
    // Try to execute this risky code
    let result = someFunctionThatDoesNotExist();
} catch (error) {
    // If ANY error occurs in the block above, the code immediately jumps down here
    console.log("Oops, something went wrong!");
    console.error("The error was:", error.message); // Logs the specific error
} finally {
    // This block is completely optional, but it ALWAYS runs at the very end
    console.log("Cleanup code runs here, success or fail.");
}
```
