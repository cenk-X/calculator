let numberArray = [];
let numbr = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "0";
let screen = document.querySelector(".screen");

function operators(input) {
  numbr = +numberArray.join("");
  numberArray = [];

  if (operator != "0") {
    secondNumber = numbr;
    pushedEqual();
    operator = input;
    return;
  }

  if ((operator = "0")) {
    operator = input;
    firstNumber = numbr;
    return;
  }
}

function pushedEqual() {
  if (secondNumber === 0) {
    secondNumber = +numberArray.join("");
    numberArray = [];
  }

  if (operator === "+") numbr = firstNumber + secondNumber;
  if (operator === "-") numbr = firstNumber - secondNumber;
  if (operator === "*") numbr = firstNumber * secondNumber;
  if (operator === "/") numbr = firstNumber / secondNumber;

  secondNumber = 0;
  operator = "0";
  numberArray = [];
  numbers(numbr);
}

function pushedDel() {
  firstNumber = 0;
  secondNumber = 0;
  numbr = 0;
  numberArray = [];
  operator = "0";
  display();
}

function delOneDecimal() {
  let popper = 0;
  if (numberArray.length > 0) popper = numberArray.pop();
  display();
}

function display() {
  if (numberArray.length === 0) screen.innerHTML = "0";

  if (numberArray.length > 0) screen.innerHTML = numberArray.join("");
}

function numbers(input) {
  if (numberArray.length===0 && input==='0') {

  }else {  numberArray.push(input);
  }
  display();
}

let calcolatore = document.querySelector(".calcolatore");
calcolatore.addEventListener("click", function (e) {
  let input = e.target.value;

  if (input === "+" || input === "-" || input === "*" || input === "/")
    operators(input);

  if (input === "del") pushedDel();

  if (input === "=") pushedEqual();

  if (input === "backSpace") delOneDecimal();

  if (
    input === "0" ||
    input === "1" ||
    input === "2" ||
    input === "3" ||
    input === "4" ||
    input === "5" ||
    input === "6" ||
    input === "7" ||
    input === "8" ||
    input === "9"
  ) {
    numbers(input);
  }
});
