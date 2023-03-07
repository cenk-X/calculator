let numberArray = [];
let numbr = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "0";
let screen = document.querySelector(".screen");
let cameByOperators=false;

function operators(input) {
  numbr = +numberArray.join("");
  numberArray = [];

  if (operator != "0") {
    secondNumber = numbr;
    cameByOperators=true;
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
  firstNumber=numbr;

(cameByOperators)? cameByOperators=false : numbers(numbr);
 
if(numbr===666) {
  screen.innerHTML = 'PINCO TIME!';
  window.open('./eEggs/pincAttack.jpg');
} 

if(numbr=== 667){
  screen.innerHTML = 'PINCO TIME 2!';
  window.open('./eEggs/pincAttack2.jpg');
}

if(numbr=== 999){
  screen.innerHTML = 'OLD GLORIA';
  window.open('./eEggs/old-g.JPG');
}

if(numbr===998){ 
  screen.innerHTML ='OLD CENK';
  window.open('./eEggs/old-c.JPG');
}

if(numbr===1000){ 
  screen.innerHTML ='ELF';
  window.open('./eEggs/elf.jpg');
}



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
  calc(e.target.value);

});

window.addEventListener("keydown", function(e){
  
  if (e.key === "Delete" || e.keyCode ===46) pushedDel();

  if (e.key === "Enter" || e.keyCode===13) pushedEqual();

  if (e.key === "Backspace" || e.keyCode===8) delOneDecimal();


  else  calc(e.key);
  console.log(e)
});


function calc(input){

  if (input === "+" || input === "-" || input === "*" || input === "/")
    operators(input);

  if (input === "del") pushedDel();

  if (input === "=") pushedEqual();

  if (input === "canc") delOneDecimal();

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
  return;
}