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


// 1. create a function that checks if a number is even or odd number.

/*
MAIN MAP:
1. create a function = evenOdd
2. parameter = num
3. verify if the argument is a data type of number
4. condition: if even or odd.
5. even are number that can be divided by 2 with remainder of 0.
*/

function evenOdd(num){
 if (typeof num === "number"){
    if (num % 2 === 0){
    console.log("it is an even number")
    } else{
      console.log("it is an odd number")
    }
 }else{
   console.log("argument expects 'number' instead of " + typeof num)
 }
}
// evenOdd()


// create a program that reverse a word's spelling. example "hello" will be reversed too "olleh"

/*
1. create a function = reverseWord.
2. parameter = word;
3. the parameter must be a type of string,
4. function should be able to pick individual letters and change its position.
5. we will iterate over the word using for loop.
6. we will save the reversed word somewhere in a variable.
*/

function reverseWord(word){
  let reversed = ""
  for (let i = word.length - 1; i >= 0; i--){
    reversed = reversed + word[i]
  }
  return reversed
}

let result = reverseWord("noon")
console.log(result)










