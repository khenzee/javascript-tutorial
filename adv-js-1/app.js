let header = document.getElementById("htag")
let ptag = document.querySelector("#ptag")
let header1 = document.getElementsByClassName("header")
let par = document.querySelector(".para")
let div = document.querySelector("div")



header.style.color = "green"
par.textContent = par.parentElement.tagName

let button = document.querySelector("button");
function changeVal(event){
    header.textContent = "i have been clicked"
}
button.addEventListener("click", changeVal)