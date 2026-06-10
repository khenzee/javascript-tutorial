let a = "hey"
let b = "daniel"

console.log(` ${a} ${b} it's "how are you" not how is you`);

console.log() 


// function sayHello(playerName) {
//   return("Welcome, " + playerName + "!");
// }

const sayHello = (playerName) => {
  return("Welcome, " + playerName + "!");
}

let greetDaniel = sayHello("daniel")


console.log(greetDaniel)

let result = "the greeting is: " + greetDaniel
console.log(result)


let colorsArr = ["Red", "Green", "Blue", "yellow"];

function colorLoop(color, index) {
  console.log(`Color at index ${index} is ${color}`);
}

colorsArr.forEach(colorLoop);

//colorsArr.forEach(function(color, index) {
//   console.log(`Color at index ${index} is ${color}`);
// });


const player1 = {
  username: "jef",
  level: 24,
  course: "SWE",
  greet(){
    return("welcome to " + this.course + " level " + this.level + " " + this.username)
  }
}


let answer = player1.greet()

console.log(answer)

let urName = "jef"

console.log(urName.toUpperCase())


// create a function that determines if a number is Even or Odd.

function evenOdd(num){
 if (typeof num === "number"){
    if (num % 2 === 0){
    console.log("this is an even number")
    } else{
      console.log("this is an odd number")
    }
 }else{
   console.log(`does not accept data type of ${typeof num} it should be a type of "number" instead`)
 }
}

evenOdd(5)







// create a function that accepts and reverse a word.

// hello => olleh

// function reverse(word){
//  return(word.split("").reverse().join(""))
// }

// const reverse = (word) => word.split("").reverse().join("")


// let result = reverse("hello")
// console.log(result)

function reverseOpt2(word){
  let reversed = ""
  for (let i = word.length - 1; i >= 0; i-- ){
    reversed = reversed + word[i];
  }
  return reversed
}

console.log(reverseOpt2("daniel"))

// let word = "hello"
// for (let i = word.length -1; i >= 0; i-- ){
//     reversed += word[i];
//   }
let v = "helloegeroigheotijp"
console.log(`the last postion is: ${v.length - 1}`)
 
let numb = "jef"
 numb += 1




