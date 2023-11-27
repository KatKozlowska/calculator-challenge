import "./mian.css";

const buttons = document.querySelectorAll<HTMLButtonElement>("button");
const resultDisplay = document.querySelector<HTMLHeadingElement>(".display__result");
const num1Display = document.querySelector<HTMLParagraphElement>(".display__num1")
const num2Display = document.querySelector<HTMLParagraphElement>(".display__num2")
const operatorDisplay = document.querySelector<HTMLParagraphElement>(".display__operator")


if(!buttons || !resultDisplay || !num1Display || !num2Display || !operatorDisplay) {throw new Error ("Error");
};

let num1 = "";
let operator = "";
let num2 = "";
let answer = 0;


// This bit makes it so when i press button it does the magic.

const handleButtonClick = (event: Event) => {
   const button = event.currentTarget as HTMLButtonElement;
   const buttonText = button.textContent as string;  //as keyword means youre casting 

   if (buttonText == "C") {
      resultDisplay.innerText = "0";
      num1 = "";
      num2 = "";
      answer = 0;
      operator = "";
   } else if (button.classList.contains("number") ) {
      if(!operator){
         num1 += buttonText;
         console.log("Num1: " + num1);
      } else if (num1 && operator) {
         num2 += buttonText
         console.log("Num2: " + num2);
      }

      resultDisplay.innerText = button.textContent as string;
   } else if (button.classList.contains("backspace") ) {
      if(!operator){
         num1 = num1.slice(0, -1);
         console.log("Num1: " + num1);
      } else if (num1 && operator) {
         num2 = num2.slice(0,-1);
         console.log("Num2: " + num2);
      }

      resultDisplay.innerText = button.textContent as string;
   } else if (button.classList.contains("operator")) {
         operator = buttonText
         console.log("Operator: " + operator);
   } else if (button.classList.contains("equals")) {
      let value1:number = parseInt(num1);
      let value2:number = parseInt(num2);
      switch (operator) {
         case "+":
            answer= value1 + value2;
            break;
         case "-":
            answer =  value1 - value2;
            break;
         case "/":
            answer = value1 / value2;
            break;
         case "x":
            answer = value1 * value2;
            break;
      }
      console.log("Answer: " + answer);      
   }

// this bit updates the displays 
   num1Display.innerText = "" + num1;
   operatorDisplay.innerText = operator;
   num2Display.innerText  = "" + num2;
   resultDisplay.innerText = "" + answer; 
};
// for every button we found earlier

buttons.forEach((button) => button.addEventListener("click", handleButtonClick));



