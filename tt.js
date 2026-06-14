 // intro to javascript
 // variables
 // data types
 // operators
 // conditionals
 // loop
 // functions
 // Array & strings methods
// javascript is a browser based programming language
 
// let, const, var
let age = 25; // let is a mutable variable
age = 50;
console.log("age is a data type of: " + typeof age)

const name = "david" //const is in an immutable variable.
console.log("name is a data type of: " + typeof name)

let isLive = false
console.log("isLive is a data type of: " + typeof isLive)

let fruit = ["orange", "mango", "agbalumo"] // Array
console.log("fruit is a data type of: " + typeof fruit)

let player1 = {
  username: "david",
  level: 28,
  game: "football"
}

let product = {
  name: "cream",
  price: 60
}

console.log("player1 is a data type of: " + typeof player1)

// function
function sayHello(name){
  console.log("hello to you " + name)
}

sayHello("femi")
sayHello("simi")
console.log("sayHello is a data type of: " + typeof sayHello)

// DATA TYPES: number, string, booleans, array, object, function.


function list({val}){
  for (let i = 0; i <= val.length - 1; i++){
    console.log(val)
  }
}


list(product)




