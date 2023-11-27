import "./mian.css";

const buttons = document.querySelectorAll<HTMLButtonElement>("button");
const result = document.querySelector<HTMLHeadingElement>("h1");
const calculation = document.querySelector<HTMLParagraphElement>(".display__calculation");


if(!buttons || !calculation || !result ) {throw new Error ("Error");
};

let num1 = 0;
let operator = "";
let num2 = 0;
let answer = 0;


// This function is the working code.
const handleButtonClick = (event: Event) => {
   // my event occurs on a html button > assign as button
   const button = event.currentTarget as HTMLButtonElement;
   const buttonText = button.textContent as string;

   if (buttonText == "C") {
      result.innerText = "0";
      calculation.innerText = "";
      num1 = 0;
      num2 = 0;
      answer = 0;
      operator = "";
   } else if (button.classList.contains("number") ) {
      if(num1 === 0){
         num1 = parseInt(buttonText)
         console.log("Num1: " + num1);
      } else if (num1 && operator) {
         num2 = parseInt(buttonText)
         console.log("Num2: " + num2);
      }
      calculation.innerText += button.textContent as string;
      result.innerText = button.textContent as string;
   } else if (button.classList.contains("operator")) {
         operator = buttonText
         console.log("Operator: " + operator);
   } else if (button.classList.contains("equals")) {
      switch (operator) {
         case "+":
            answer= num1 + num2;
            break;
         case "-":
            answer =  num1 - num2;
            break;
         case "/":
            answer = num1 / num2;
            break;
         case "x":
            answer = num1 * num2;
            break;
      }

      console.log("Answer: " + answer);      
   }

// console.log(num1);
// console.log(operator);
// console.log(num2);
// console.log(answer);
 
};
// for every button we found earlier

buttons.forEach((button) => button.addEventListener("click", handleButtonClick));

// number a, operator, number b 




//delete function

//computing 

// i need the calculator to read the last number which i gave it 
//listen for an operator
// read the number i give it after the operator 
//perform the maths 
// update the display with the result 

// (nice to have later ??? ) show history 

