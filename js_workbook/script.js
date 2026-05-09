// Data: The 18 modules from the presentation
const modules = [
    {
        title: "Introduction to JavaScript",
        subtitle: "The language of the web — dynamic, versatile, and essential",
        concepts: [
            { 
                icon: "fa-info-circle", 
                title: "What is JavaScript?", 
                desc: "If HTML is the skeleton (structure) and CSS is the skin (styling) of a webpage, JavaScript is the brain. It brings the page to life, allowing it to respond to user interactions, update content dynamically, and perform complex logic.", 
                code: `<span class="code-comment">// Adding JavaScript to your HTML usually happens at the</span>\n<span class="code-comment">// bottom of the &lt;body&gt; tag so the page loads faster.</span>\n<span class="code-keyword">&lt;script src="app.js"&gt;&lt;/script&gt;</span>` 
            },
            { 
                icon: "fa-terminal", 
                title: "The Developer Console", 
                desc: "Your browser has a built-in playground called the Developer Console (press F12). Think of it as a direct line of communication with JavaScript. You can test small snippets of code and see output immediately here.", 
                code: `<span class="code-comment">// Print a simple message to the console</span>\nconsole.log(<span class="code-string">"Hello, World!"</span>);\n\n<span class="code-comment">// Print a red error message to warn developers</span>\nconsole.error(<span class="code-string">"Something went wrong!"</span>);` 
            }
        ]
    },
    {
        title: "Variables in JavaScript",
        subtitle: "Containers for storing data values",
        concepts: [
            { 
                icon: "fa-box", 
                title: "let vs const vs var", 
                desc: "A variable is like a labeled moving box where you store data. <br><br><b>let:</b> A box whose contents can change later (like tracking a game score).<br><b>const:</b> A locked box. Once you put something in, you can never replace it (like a birth year).<br><b>var:</b> The old, clunky way to make a box. Avoid using this today to prevent bugs.", 
                code: `<span class="code-comment">// We can reassign a 'let' variable</span>\n<span class="code-keyword">let</span> score = 25;\nscore = 30; <span class="code-comment">// Perfectly fine!</span>\n\n<span class="code-comment">// A 'const' variable is locked in placed</span>\n<span class="code-keyword">const</span> PI = 3.14159;\nPI = 4; <span class="code-comment">// ❌ ERROR: Assignment to constant variable.</span>` 
            }
        ]
    },
    {
        title: "Module 3: Data Types",
        subtitle: "The different kinds of information JavaScript can understand",
        concepts: [
            { 
                icon: "fa-hashtag", 
                title: "Primitives: Numbers & Strings", 
                desc: "Primitives are the absolute simplest building blocks in code. <b>Numbers</b> handle all math (whole numbers, decimals, negatives). <b>Strings</b> are text—think of them as a necklace of characters strung together. Strings MUST be wrapped in quotes (single or double).", 
                code: `<span class="code-keyword">let</span> age = 42; <span class="code-comment">// Number (no quotes)</span>\n<span class="code-keyword">let</span> temperature = -4.5; <span class="code-comment">// Decimal/Negative Number</span>\n\n<span class="code-keyword">let</span> name = <span class="code-string">"Alice"</span>; <span class="code-comment">// String</span>\n<span class="code-keyword">let</span> fakeNumber = <span class="code-string">"100"</span>; <span class="code-comment">// Also a String! Because of quotes.</span>` 
            },
            { 
                icon: "fa-toggle-on", 
                title: "Primitives: Booleans, Null & Undefined", 
                desc: "<b>Booleans</b> are simple light switches: <code>true</code> or <code>false</code>. <br><b>Undefined</b> is JavaScript telling you: 'You created a box, but forgot to put anything in it.' <br><b>Null</b> is you telling JavaScript: 'I intentionally emptied this box.'", 
                code: `<span class="code-keyword">let</span> isStudent = true; <span class="code-comment">// Boolean (Notice no quotes!)</span>\n\n<span class="code-keyword">let</span> mystery; \nconsole.log(mystery); <span class="code-comment">// Output: undefined (Automatically set by JS)</span>\n\n<span class="code-keyword">let</span> emptyPurse = null; <span class="code-comment">// You purposefully set it to nothing</span>` 
            },
            { 
                icon: "fa-cube", 
                title: "Reference Types: Objects & Arrays", 
                desc: "When you have lots of related data, use complex types.<br><b>Arrays:</b> An ordered numbered list (like a ranked grocery list).<br><b>Objects:</b> A filing cabinet where every piece of data has a specific label (key).", 
                code: `<span class="code-comment">// Arrays use brackets []</span>\n<span class="code-keyword">let</span> highScores = [1500, 1200, 900];\n\n<span class="code-comment">// Objects use curly braces {}</span>\n<span class="code-keyword">let</span> player = {\n    username: <span class="code-string">"Wizard99"</span>,\n    level: 42,\n    isOnline: true\n};` 
            }
        ],
        capstone: {
            desc: "Create an object representing a car. It should have a 'brand' (String), 'year' (Number), and 'isElectric' (Boolean). Then create an array of its 'colors' (Strings).",
            solution: `<span class="code-keyword">const</span> car = {\n    brand: <span class="code-string">"Tesla"</span>,\n    year: 2024,\n    isElectric: true\n};\n\n<span class="code-keyword">const</span> colors = [<span class="code-string">"Silver"</span>, <span class="code-string">"Black"</span>, <span class="code-string">"Red"</span>];`
        }
    },
    {
        title: "Module 4: JavaScript Operators",
        subtitle: "Math, Comparisons, and Logic",
        concepts: [
            { 
                icon: "fa-calculator", 
                title: "Mathematical Operators", 
                desc: "Operators let us manipulate numbers just like a calculator. Add (+), subtract (-), multiply (*), and divide (/). The assignment operator (=) places the result into a variable.", 
                code: `<span class="code-keyword">let</span> apples = 10 + 5; <span class="code-comment">// 15</span>\n\n<span class="code-comment">// Shortcut to add 5 to the existing amount</span>\napples += 5; <span class="code-comment">// Now 20 (Same as writing: apples = apples + 5)</span>\n\napples++; <span class="code-comment">// Plussing by exactly one. Now 21.</span>` 
            },
            { 
                icon: "fa-balance-scale", 
                title: "Comparison Operators", 
                desc: "Comparisons ask JavaScript to answer a yes/no question using Booleans. We use triple equals (===) to ask 'Are these exactly the same?'.", 
                code: `10 === 10 <span class="code-comment">// true (Exactly identical)</span>\n10 === <span class="code-string">"10"</span> <span class="code-comment">// false (Strict check blocks a Number from equaling a String)</span>\n\n10 !== 5 <span class="code-comment">// true (Not equal to)</span>\n10 > 5 <span class="code-comment">// true (Greater than)</span>` 
            },
            { 
                icon: "fa-project-diagram", 
                title: "Logical Operators (AND / OR)", 
                desc: "Sometimes you need to combine two questions together.<br><b>AND (&&):</b> Requires BOTH sides to be true.<br><b>OR (||):</b> Requires ONLY ONE side to be true.", 
                code: `<span class="code-keyword">let</span> hasTicket = true;\n<span class="code-keyword">let</span> isVIP = false;\n\n<span class="code-comment">// Both must be true</span>\nconsole.log(hasTicket && isVIP); <span class="code-comment">// false </span>\n\n<span class="code-comment">// Only one needs to be true</span>\nconsole.log(hasTicket || isVIP); <span class="code-comment">// true </span>` 
            }
        ]
    },
    {
        title: "Module 5: Conditionals",
        subtitle: "Teaching your code to make decisions",
        concepts: [
            { 
                icon: "fa-code-branch", 
                title: "if / else Statements", 
                desc: "Like a fork in the road. JavaScript evaluates the condition inside the parenthesis <code>( )</code>. If it is exactly <code>true</code>, it runs the code block inside the curly braces <code>{ }</code>.", 
                code: `<span class="code-keyword">let</span> temperature = 65;\n\n<span class="code-keyword">if</span> (temperature > 75) {\n    <span class="code-comment">// Skips this because 65 is NOT greater than 75</span>\n    console.log(<span class="code-string">"Wear a t-shirt!"</span>);\n} <span class="code-keyword">else if</span> (temperature > 50) {\n    <span class="code-comment">// Stops and runs this block!</span>\n    console.log(<span class="code-string">"Wear a light jacket."</span>);\n} <span class="code-keyword">else</span> {\n    <span class="code-comment">// The fallback plan</span>\n    console.log(<span class="code-string">"Bring a heavy coat."</span>);\n}` 
            },
            { 
                icon: "fa-compress-arrows-alt", 
                title: "The Ternary Shortcut", 
                desc: "If you have a very simple if/else statement, you can shrink it to a single line using the Ternary Operator: <code>condition ? true_action : false_action</code>.", 
                code: `<span class="code-keyword">let</span> age = 20;\n\n<span class="code-comment">// Old way (5 lines)</span>\n<span class="code-keyword">let</span> status;\n<span class="code-keyword">if</span> (age >= 18) { status = <span class="code-string">"Adult"</span>; } <span class="code-keyword">else</span> { status = <span class="code-string">"Minor"</span>; }\n\n<span class="code-comment">// Ternary shortcut (1 line!)</span>\n<span class="code-keyword">let</span> status2 = age >= 18 ? <span class="code-string">"Adult"</span> : <span class="code-string">"Minor"</span>;` 
            }
        ]
    },
    {
        title: "Module 6: Loops in JavaScript",
        subtitle: "Automating repetitive chores",
        concepts: [
            { 
                icon: "fa-redo", 
                title: "The Standard For Loop", 
                desc: "When you know *exactly* how many times you want a piece of code to run. It consists of three parts separated by semicolons: <br>1. Starting point (`let i = 0`)<br>2. When to stop (`i < 5`)<br>3. Step size (`i++`)", 
                code: `<span class="code-comment">// This loop runs exactly 5 times. i becomes 0, 1, 2, 3, 4</span>\n<span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = 0; i < 5; i++) {\n    console.log(<span class="code-string">"Count: "</span> + i);\n}` 
            },
            { 
                icon: "fa-sync", 
                title: "The For-Of Loop (For Arrays)", 
                desc: "If you want to look at every single item inside an array, a `for-of` loop is massively easier to read than a traditional `for` loop.", 
                code: `<span class="code-keyword">const</span> cart = [<span class="code-string">"Shirt"</span>, <span class="code-string">"Shoes"</span>, <span class="code-string">"Hat"</span>];\n\n<span class="code-comment">// Reads as: "For every 'item' inside of 'cart', do this:"</span>\n<span class="code-keyword">for</span> (<span class="code-keyword">let</span> item <span class="code-keyword">of</span> cart) {\n    <span class="code-comment">// Automatically runs 3 times</span>\n    console.log(<span class="code-string">"Scanning: "</span> + item);\n}` 
            },
            { 
                icon: "fa-stop-circle", 
                title: "Breaking Out (break / continue)", 
                desc: "You are allowed to interrupt a loop mid-cycle.<br><b>break:</b> Shatters the loop entirely. It stops running immediately.<br><b>continue:</b> Cancels the current iteration and instantly skips to the next one.", 
                code: `<span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = 1; i <= 5; i++) {\n    <span class="code-keyword">if</span> (i === 3) {\n        <span class="code-keyword">continue</span>; <span class="code-comment">// Skip number 3 completely!</span>\n    }\n    <span class="code-keyword">if</span> (i === 5) {\n        <span class="code-keyword">break</span>; <span class="code-comment">// Stop entirely before printing 5!</span>\n    }\n    console.log(i);\n}\n<span class="code-comment">// Final console: 1, 2, 4</span>` 
            }
        ],
        capstone: {
            desc: "Write a for loop that iterates from 1 to 5, and inside the loop, push each number into an array called 'numbers'.",
            solution: `<span class="code-keyword">const</span> numbers = [];\n\n<span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = 1; i <= 5; i++) {\n    numbers.push(i);\n}\nconsole.log(numbers); <span class="code-comment">// [1, 2, 3, 4, 5]</span>`
        }
    },
    {
        title: "Module 7: JavaScript Functions",
        subtitle: "Reusable packets of logic",
        concepts: [
            { 
                icon: "fa-function", 
                title: "Functions: The Recipe Book", 
                desc: "A function is like a recipe. You write the instructions to bake a cake exactly once. Then, anywhere else in your project, you can just call the function to bake a cake without rewriting the code.", 
                code: `<span class="code-comment">// 1. Write the recipe (Declaration)</span>\n<span class="code-keyword">function</span> sayHello(playerName) {\n    console.log(<span class="code-string">"Welcome, "</span> + playerName + <span class="code-string">"!"</span>);\n}\n\n<span class="code-comment">// 2. Call the recipe as many times as you like!</span>\nsayHello(<span class="code-string">"Mario"</span>);\nsayHello(<span class="code-string">"Luigi"</span>);` 
            },
            { 
                icon: "fa-exchange-alt", 
                title: "Return vs Console.log", 
                desc: "This is a massive hurdle for beginners!<br><b>console.log:</b> Just shouts out a value to the developer screen loudly. It does NOT give data back to your script.<br><b>return:</b> Quietly hands the actual processed data back to the script so you can save it into a variable.", 
                code: `<span class="code-keyword">function</span> calculateTax(price) {\n    <span class="code-keyword">let</span> taxAmount = price * 0.20;\n    \n    <span class="code-comment">// Provide the data back to whoever called this function</span>\n    <span class="code-keyword">return</span> taxAmount;\n\n    <span class="code-comment">// Note: ANY code below 'return' is completely ignored!</span>\n}\n\n<span class="code-comment">// We successfully captured the 'returned' data</span>\n<span class="code-keyword">let</span> totalTax = calculateTax(100); <span class="code-comment">// totalTax = 20</span>` 
            },
            { 
                icon: "fa-arrow-right", 
                title: "Arrow Functions (Modern ES6)", 
                desc: "Introduced years ago, arrow functions (`=>`) provide a shorter, sleeker way to write functions. You'll see this everywhere in professional code.", 
                code: `<span class="code-comment">// Old standard function</span>\n<span class="code-keyword">const</span> addSub = <span class="code-keyword">function</span>(a, b) {\n    <span class="code-keyword">return</span> a + b;\n}\n\n<span class="code-comment">// Arrow syntax (Drops the 'function' word, adds an arrow)</span>\n<span class="code-keyword">const</span> addModern = (a, b) => {\n    <span class="code-keyword">return</span> a + b;\n};\n\n<span class="code-comment">// Super shortcut! If it's a one-liner and you drop the { curly braces },</span>\n<span class="code-comment">// Javascript AUTOMATICALLY returns the result for you!</span>\n<span class="code-keyword">const</span> addHyper = (a, b) => a + b;` 
            }
        ]
    },
    {
        title: "Module 8: Arrays in JavaScript",
        subtitle: "Advanced list manipulation tools",
        concepts: [
            { 
                icon: "fa-list-ul", 
                title: "Basic Array Manipulation", 
                desc: "Arrays come packed with built-in tools (methods) to add or remove data.<br>`push()` adds to the back, `pop()` cuts off the back. <br>`unshift()` adds to the front, `shift()` cuts off the front.", 
                code: `<span class="code-keyword">let</span> cart = [<span class="code-string">"Apples"</span>, <span class="code-string">"Oranges"</span>];\n\n<span class="code-comment">// Add to the end of the line</span>\ncart.push(<span class="code-string">"Bananas"</span>); <span class="code-comment">// ["Apples", "Oranges", "Bananas"]</span>\n\n<span class="code-comment">// Remove the VERY FIRST item in line</span>\ncart.shift(); <span class="code-comment">// Removes "Apples". Result: ["Oranges", "Bananas"]</span>` 
            },
            { 
                icon: "fa-cut", 
                title: "Slicing Arrays (slice & splice)", 
                desc: "Use `slice()` to copy a piece of an array (without hurting the original).<br>Use `splice()` to permanently rip out items from the middle of an array.", 
                code: `<span class="code-keyword">let</span> animals = [<span class="code-string">"Dog"</span>, <span class="code-string">"Cat"</span>, <span class="code-string">"Bear"</span>, <span class="code-string">"Ant"</span>];\n\n<span class="code-comment">// Copy starting at index 1 up to (but excluding) index 3</span>\n<span class="code-keyword">let</span> favorites = animals.slice(1, 3); <span class="code-comment">// ["Cat", "Bear"]</span>\n\n<span class="code-comment">// Permanently destroy 1 item, starting at index 0</span>\nanimals.splice(0, 1); \n<span class="code-comment">// animals array is permanently changed to: ["Cat", "Bear", "Ant"]</span>` 
            },
            { 
                icon: "fa-sync-alt", 
                title: "Array Superpowers: Map & Filter", 
                desc: "Instead of writing tedious `for` loops, use specialized tools that instantly process the whole array.<br><b>filter:</b> Keeps only items that pass a true/false test.<br><b>map:</b> Converts every single item into something completely new.", 
                code: `<span class="code-keyword">let</span> numbers = [1, 2, 3, 4];\n\n<span class="code-comment">// Filter: Return true if number is greater than 2</span>\n<span class="code-keyword">let</span> bigNums = numbers.filter(n => n > 2); \n<span class="code-comment">// Result: [3, 4]</span>\n\n<span class="code-comment">// Map: Return the number multiplied by 10</span>\n<span class="code-keyword">let</span> tens = numbers.map(n => n * 10); \n<span class="code-comment">// Result: [10, 20, 30, 40]</span>` 
            }
        ],
        capstone: {
            desc: "You have an array of ages: [12, 17, 24, 30, 15]. Use the `.filter()` method to create a new array holding only the 'adults' (ages 18 or older).",
            solution: `<span class="code-keyword">const</span> ages = [12, 17, 24, 30, 15];\n\n<span class="code-comment">// Filter uses an arrow function returning a yes/no condition</span>\n<span class="code-keyword">const</span> adults = ages.filter(age => age >= 18);\n\nconsole.log(adults); <span class="code-comment">// [24, 30]</span>`
        }
    },
    {
        title: "Module 9: JavaScript Strings",
        subtitle: "Chopping and combining text",
        concepts: [
            { 
                icon: "fa-font", 
                title: "String Indexes and Formatting", 
                desc: "Believe it or not, a string is very much like an Array of characters behind the scenes! You can look up specific letters using brackets like `text[0]`. You also have built-in tools to uppercase, lowercase, and search.", 
                code: `<span class="code-keyword">let</span> msg = <span class="code-string">"Welcome to JS!"</span>;\n\nconsole.log(msg[0]); <span class="code-comment">// "W" (First letter)</span>\nconsole.log(msg.toUpperCase()); <span class="code-comment">// "WELCOME TO JS!"</span>\nconsole.log(msg.includes(<span class="code-string">"Java"</span>)); <span class="code-comment">// false (it says JS!)</span>` 
            },
            { 
                icon: "fa-cut", 
                title: "Slicing and Splitting Strings", 
                desc: "You can rip pieces of strings off. `substring()` extracts characters over a range. `split()` explodes a single string into an entire Array based on a separator variable.", 
                code: `<span class="code-keyword">let</span> date = <span class="code-string">"2025-10-31"</span>;\n\n<span class="code-comment">// Start picking characters at index 0 up to 4</span>\n<span class="code-keyword">let</span> year = date.substring(0, 4); <span class="code-comment">// "2025"</span>\n\n<span class="code-comment">// Explode the string into an Array everywhere there is a hyphen</span>\n<span class="code-keyword">let</span> arrayPieces = date.split(<span class="code-string">"-"</span>); \n<span class="code-comment">// ["2025", "10", "31"]</span>` 
            },
            { 
                icon: "fa-code", 
                title: "Template Literals", 
                desc: "In the past, combining words and variables required bulky `+` signs. Now, using <b>backticks (\`)</b>, we can elegantly inject variables directly into text using the <code>\${variable}</code> syntax.", 
                code: `<span class="code-keyword">let</span> player = <span class="code-string">"Mario"</span>;\n<span class="code-keyword">let</span> score = 9000;\n\n<span class="code-comment">// Painful old way</span>\n<span class="code-keyword">let</span> msg1 = <span class="code-string">"Player "</span> + player + <span class="code-string">" scored "</span> + score + <span class="code-string">"!"</span>;\n\n<span class="code-comment">// Modern, deeply readable interpolation via backticks</span>\n<span class="code-keyword">let</span> msg2 = <span class="code-string">\`Player \${player} scored \${score}!\`</span>;` 
            }
        ]
    },
    {
        title: "Module 10: Document Object Model (DOM)",
        subtitle: "How JavaScript views your HTML",
        concepts: [
            { 
                icon: "fa-sitemap", 
                title: "What is the DOM?", 
                desc: "The browser parses your raw HTML text and builds a massive, interactive 3D family tree out of it in memory. This tree is called the DOM. JavaScript cannot magically touch your screen—instead, it edits the DOM tree, and the browser redraws the visible screen automatically.", 
                code: `<span class="code-comment">// The global 'document' object IS the DOM tree.</span>\n<span class="code-comment">// Every single HTML tag lives inside it as an Object.</span>\n\nconsole.log(document.title); <span class="code-comment">// Prints the &lt;title&gt; tag content</span>\ndocument.body.style.backgroundColor = <span class="code-string">"red"</span>; <span class="code-comment">// Instantly turns page red!</span>` 
            },
            { 
                icon: "fa-search", 
                title: "Selecting Elements", 
                desc: "To change HTML, you must first grab it from the DOM. You can grab by ID (which is fast but only finds one thing), or use `querySelector` (which allows you to grab things using exact CSS syntax).", 
                code: `<span class="code-comment">// Find a singular element by its ID tag</span>\n<span class="code-keyword">let</span> banner = document.getElementById(<span class="code-string">"main-banner"</span>);\n\n<span class="code-comment">// The modern weapon of choice: querySelector</span>\n<span class="code-comment">// It finds the FIRST element that matches the CSS class '.btn-primary'</span>\n<span class="code-keyword">let</span> firstBtn = document.querySelector(<span class="code-string">".btn-primary"</span>);\n\n<span class="code-comment">// querySelectorAll finds EVERY matching element and packs them into a NodeList</span>\n<span class="code-keyword">let</span> allButtons = document.querySelectorAll(<span class="code-string">"button"</span>);` 
            }
        ]
    },
    {
        title: "Traversing & Modifying Elements",
        subtitle: "Hacking the web page",
        concepts: [
            { 
                icon: "fa-arrows-alt", 
                title: "Traversing (Moving around)", 
                desc: "Once you grab one HTML element, you can navigate strictly through its relatives—its parent container, or its children.", 
                code: `<span class="code-keyword">let</span> item = document.querySelector(<span class="code-string">".menu-item"</span>);\n\n<span class="code-comment">// Move up to the &lt;ul&gt; that houses the item</span>\n<span class="code-keyword">let</span> menuBox = item.parentElement;\n\n<span class="code-comment">// Find the next sister element inside the menu</span>\n<span class="code-keyword">let</span> nextItem = item.nextElementSibling;` 
            },
            { 
                icon: "fa-edit", 
                title: "Modifying Content", 
                desc: "You can overwrite text, inject HTML, or alter CSS classes dynamically. This is how websites change without having to reload the page!", 
                code: `<span class="code-keyword">let</span> heading = document.querySelector(<span class="code-string">"h1"</span>);\n\n<span class="code-comment">// Swap out the text</span>\nheading.textContent = <span class="code-string">"New Title Revealed!"</span>;\n\n<span class="code-comment">// Add a brand new CSS class to style it</span>\nheading.classList.add(<span class="code-string">"highlighted"</span>);` 
            }
        ]
    },
    {
        title: "JavaScript Forms",
        subtitle: "Intercepting user data safely",
        concepts: [
            { 
                icon: "fa-check-double", 
                title: "Validating Before Submission", 
                desc: "Forms naturally try to refresh the page to send data to a server. We use JavaScript to intercept this attempt, politely pause it, and check that the user filled out the passwords/emails correctly first.", 
                code: `<span class="code-keyword">const</span> form = document.querySelector(<span class="code-string">"#signup-form"</span>);\n\nform.addEventListener(<span class="code-string">"submit"</span>, <span class="code-keyword">function</span>(event) {\n    <span class="code-comment">// Stop the page from reloading!</span>\n    event.preventDefault(); \n    \n    <span class="code-comment">// Now safely validate password length, emails, etc.</span>\n    console.log(<span class="code-string">"Form paused for inspection..."</span>);\n});` 
            }
        ]
    },
    {
        title: "Event Handling",
        subtitle: "Listening for user action (clicks, types, scrolls)",
        concepts: [
            { 
                icon: "fa-bolt", 
                title: "Event Listeners", 
                desc: "JavaScript acts like a security guard waiting for a specific event to occur. You attach an 'EventListener' to an element, specifying the action ('click', 'keydown') and providing a callback recipe (function) to trigger when it happens.", 
                code: `<span class="code-keyword">let</span> btn = document.querySelector(<span class="code-string">"#buy-button"</span>);\n\n<span class="code-comment">// When 'click' happens -> execute the arrow function</span>\nbtn.addEventListener(<span class="code-string">"click"</span>, () => {\n    alert(<span class="code-string">"Item added to cart!"</span>);\n});\n\n<span class="code-comment">// Listening to the physical keyboard keys on the entire window</span>\nwindow.addEventListener(<span class="code-string">"keydown"</span>, (event) => {\n    <span class="code-keyword">if</span> (event.key === <span class="code-string">"Escape"</span>) {\n        console.log(<span class="code-string">"User pressed escape."</span>);\n    }\n});` 
            }
        ],
        capstone: {
            desc: "Select a button with the ID 'submit-btn'. Add a click event listener to it that alerts 'Submitted succesfully!' when the user clicks it.",
            solution: `<span class="code-comment">// 1. Grab the element from the DOM</span>\n<span class="code-keyword">const</span> btn = document.getElementById(<span class="code-string">'submit-btn'</span>);\n\n<span class="code-comment">// 2. Attach the listener</span>\nbtn.addEventListener(<span class="code-string">'click'</span>, () => {\n    alert(<span class="code-string">'Submitted successfully!'</span>);\n});`
        }
    },
    {
        title: "Storing Data in Browser",
        subtitle: "Remembering who the user is",
        concepts: [
            { 
                icon: "fa-hdd", 
                title: "LocalStorage Basics", 
                desc: "LocalStorage is like a small permanent journal hidden inside the user's browser. It allows you to save data (like dark mode preferences or login tokens) so that when the user closes their browser and comes back tomorrow, the data is still there.", 
                code: `<span class="code-comment">// Save a string into the browser's permanent storage</span>\nlocalStorage.setItem(<span class="code-string">"theme"</span>, <span class="code-string">"dark"</span>);\n\n<span class="code-comment">// Retrieve that string</span>\n<span class="code-keyword">let</span> currentTheme = localStorage.getItem(<span class="code-string">"theme"</span>);\n\n<span class="code-comment">// Wipe it out</span>\nlocalStorage.removeItem(<span class="code-string">"theme"</span>);` 
            }
        ]
    },
    {
        title: "Modern ES6 Features",
        subtitle: "Writing cleaner, faster code",
        concepts: [
            { 
                icon: "fa-object-ungroup", 
                title: "Destructuring Objects", 
                desc: "Destructuring is a shortcut. Instead of repeatedly writing `user.name` and `user.age`, you can quickly unpack the variables out of the object into their own standalone variables in a single line.", 
                code: `<span class="code-keyword">const</span> user = { name: <span class="code-string">"Emma"</span>, age: 24, role: <span class="code-string">"Admin"</span> };\n\n<span class="code-comment">// Painful old way:</span>\n<span class="code-comment">// let name = user.name; let age = user.age;</span>\n\n<span class="code-comment">// Modern destructuring shortcut:</span>\n<span class="code-keyword">let</span> { name, age } = user;\n\nconsole.log(name); <span class="code-comment">// "Emma"</span>` 
            },
            { 
                icon: "fa-ellipsis-h", 
                title: "The Spread Operator (...)", 
                desc: "The spread operator (`...`) literally 'spreads' the contents of an array or object out. It's the absolute best way to copy arrays or merge objects without accidentally altering the original data.", 
                code: `<span class="code-keyword">let</span> oldSettings = { volume: 5, difficulty: <span class="code-string">"Normal"</span> };\n\n<span class="code-comment">// Create a brand new object, dump the old settings in, and overwrite volume</span>\n<span class="code-keyword">let</span> newSettings = { ...oldSettings, volume: 10 };` 
            }
        ]
    },
    {
        title: "Modules",
        subtitle: "Splitting big files into smaller ones",
        concepts: [
            { 
                icon: "fa-file-export", 
                title: "Export & Import", 
                desc: "Imagine having a 5,000 line Javascript file. It gets miserable to read quickly! Modules let you split logic into separate files (chapters). You <b>export</b> functions from one file, and <b>import</b> them into another.", 
                code: `<span class="code-comment">// Inside utils.js: (Publishing the function)</span>\n<span class="code-keyword">export function</span> calculateTax(amount) { ... }\n\n<span class="code-comment">// Inside main.js: (Subscribing to the function)</span>\n<span class="code-keyword">import</span> { calculateTax } <span class="code-keyword">from</span> <span class="code-string">'./utils.js'</span>;` 
            }
        ]
    },
    {
        title: "Asynchronous JavaScript",
        subtitle: "Promises: Waiting for the server",
        concepts: [
            { 
                icon: "fa-promise", 
                title: "What is Async?", 
                desc: "Fetching data from a database takes time. If JavaScript stopped everything to wait for the data, the whole website would freeze. Instead, JS creates a 'work order' (Promise) and continues updating the site. When the data arrives, it executes `.then()`.", 
                code: `<span class="code-comment">// Ask the server for weather data</span>\nfetch(<span class="code-string">'https://api.weather.com/today'</span>)\n  .then(response => response.json()) <span class="code-comment">// When it arrives, process it</span>\n  .then(data => console.log(data))\n  .catch(err => console.error(<span class="code-string">"Failed to load"</span>, err));` 
            },
            { 
                icon: "fa-bolt", 
                title: "Async / Await syntactic sugar", 
                desc: "`.then()` chains can get difficult to read. <b>Async/Await</b> is modern syntax that forces the code to look like it operates top-to-bottom, pausing at the `await` keyword without freezing the browser.", 
                code: `<span class="code-keyword">const</span> loadWeather = <span class="code-keyword">async</span> () => {\n    <span class="code-comment">// Pause script execution here until fetch completes...</span>\n    <span class="code-keyword">let</span> response = <span class="code-keyword">await</span> fetch(<span class="code-string">'https://api.weather.com/today'</span>);\n    <span class="code-keyword">let</span> data = <span class="code-keyword">await</span> response.json();\n    console.log(data);\n};` 
            }
        ],
        capstone: {
            desc: "Write an async function called 'fetchProfile'. Inside it, use the 'await' keyword to fetch data from '/api/user', convert the response to JSON, and log out the user data.",
            solution: `<span class="code-keyword">const</span> fetchProfile = <span class="code-keyword">async</span> () => {\n    <span class="code-keyword">try</span> {\n        <span class="code-keyword">const</span> response = <span class="code-keyword">await</span> fetch(<span class="code-string">'/api/user'</span>);\n        <span class="code-keyword">const</span> userData = <span class="code-keyword">await</span> response.json();\n        \n        console.log(userData);\n    } <span class="code-keyword">catch</span> (err) {\n        console.error(<span class="code-string">"Fetching profile failed!"</span>, err);\n    }\n};`
        }
    },
    {
        title: "Error Handling",
        subtitle: "Catching the code before it crashes",
        concepts: [
            { 
                icon: "fa-shield-alt", 
                title: "Try...Catch Blocks", 
                desc: "If broken code runs, JavaScript instantly crashes the rest of your script. A try/catch block creates a safety net. It 'tries' the dangerous code. If an error is thrown, it hands the error to the 'catch' block instead of exploding.", 
                code: `<span class="code-keyword">try</span> {\n    <span class="code-comment">// Risky operation that might crash if internet is down</span>\n    loadMassiveDataFromUnknownServer();\n    \n} <span class="code-keyword">catch</span> (error) {\n    <span class="code-comment">// Fails safe! Let the user know gracefully.</span>\n    console.error(<span class="code-string">"Oops, the server is offline."</span>, error.message);\n}` 
            }
        ]
    }
];

let currentIndex = 0;

// DOM Elements
const navList = document.getElementById('nav-list');
const contentBody = document.getElementById('content-body');
const moduleBadge = document.getElementById('module-badge');
const moduleTitle = document.getElementById('module-title');
const moduleSubtitle = document.getElementById('module-subtitle');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const capstoneSection = document.getElementById('capstone-section');
const capstoneDesc = document.getElementById('capstone-desc');
const capstoneSolution = document.getElementById('capstone-solution');
const solutionContainer = document.getElementById('solution-container');
const btnReveal = document.getElementById('btn-reveal');

function init() {
    renderSidebar();
    loadModule(currentIndex);
    setupEventListeners();
}

function renderSidebar() {
    navList.innerHTML = '';
    modules.forEach((mod, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        if (index === currentIndex) li.classList.add('active');
        li.innerHTML = `<span class="nav-number">M${index + 1}</span> <span>${mod.title}</span>`;
        li.addEventListener('click', () => {
            currentIndex = index;
            updateSidebarActive();
            loadModule(currentIndex);
            window.scrollTo(0, 0);
        });
        navList.appendChild(li);
    });
}

function updateSidebarActive() {
    document.querySelectorAll('.nav-item').forEach((li, idx) => {
        if (idx === currentIndex) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
}

function loadModule(index) {
    const mod = modules[index];
    
    // Header
    moduleBadge.textContent = 'Module ' + (index + 1);
    moduleTitle.textContent = mod.title;
    moduleSubtitle.textContent = mod.subtitle;
    
    // Body / Concepts
    contentBody.innerHTML = '';
    mod.concepts.forEach(concept => {
        const div = document.createElement('div');
        div.className = 'concept-card';
        div.innerHTML = `
            <div class="concept-header">
                <i class="fas ${concept.icon}"></i>
                <h3>${concept.title}</h3>
            </div>
            <p class="concept-desc">${concept.desc}</p>
            <pre><code>${concept.code}</code></pre>
        `;
        contentBody.appendChild(div);
    });
    
    // Capstone
    if (mod.capstone) {
        capstoneSection.classList.remove('hidden');
        capstoneDesc.textContent = mod.capstone.desc;
        capstoneSolution.innerHTML = mod.capstone.solution;
        
        // Reset reveal state
        solutionContainer.classList.add('hidden');
        btnReveal.textContent = 'Reveal Solution';
    } else {
        capstoneSection.classList.add('hidden');
    }
    
    // Buttons
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === modules.length - 1;
}

function setupEventListeners() {
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSidebarActive();
            loadModule(currentIndex);
            window.scrollTo(0, 0);
        }
    });
    
    btnNext.addEventListener('click', () => {
        if (currentIndex < modules.length - 1) {
            currentIndex++;
            updateSidebarActive();
            loadModule(currentIndex);
            window.scrollTo(0, 0);
        }
    });
    
    btnReveal.addEventListener('click', () => {
        const isHidden = solutionContainer.classList.contains('hidden');
        if (isHidden) {
            solutionContainer.classList.remove('hidden');
            btnReveal.textContent = 'Hide Solution';
        } else {
            solutionContainer.classList.add('hidden');
            btnReveal.textContent = 'Reveal Solution';
        }
    });
}

// Initialize on load
init();
