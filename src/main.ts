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


// This function is the working code.
const handleButtonClick = (event: Event) => {
   // my event occurs on a html button > assign as button
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

   num1Display.innerText = "" + num1;
   operatorDisplay.innerText = operator;
   num2Display.innerText  = "" + num2;
   resultDisplay.innerText = "" + answer;
   
};
// for every button we found earlier

buttons.forEach((button) => button.addEventListener("click", handleButtonClick));



