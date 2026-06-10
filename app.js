document.body.style.backgroundColor = "blue";
document.body.style.color = "white";
document.body.innerHTML = "<h1>Hello World</h1>"

// Variables let and const.
let number = 10;
number = 20

console.log(number)

const greetings = "hello world"
console.log(greetings)
console.log(typeof(greetings))
// Data Type. this is classified into primitive and reference data type. but today we will be working on the primitive data types.

//primitive data type

//string example
let Name = "Emma" //string
console.log(typeof(Name))

//number
let num = 50

//boolean

//undefined

//null


function sayHello(goat){
  console.log("Hey " + goat + ", " + "hello")
}

sayHello("femi")
sayHello("segun")


function addNum(num1, num2){
  return("Answer: " + (num1 + num2))
}

let addition = addNum(2, 5)


console.log(addition)

// Arrow function
const addNumber = (num1, num2) =>{
  return("Answer: " + (num1 + num2))
}

addition = addNumber(2, 5)

let cart = ["Apples", "Oranges"];
cart.push("Mango")
cart.push("Cherry")
cart.unshift("Banana")
cart.slice(1, 3)
console.log(cart)


let gender = "emmanuel is a boy"
 console.log(gender)
 console.log(gender[2]) //


