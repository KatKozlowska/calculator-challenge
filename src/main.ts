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

   if (buttonText == "ac") {
      resultDisplay.innerText = "0";
      num1 = "";
      num2 = "";
      answer = 0;
      operator = "";
   } else if (button.classList.contains("number") ) {
      if(!operator){
         if(button.id != "decimal" || (button.id == "decimal" && !num1.includes("."))) {
         num1 += buttonText;};
         console.log("Num1: " + num1);
      } else if (num1 && operator) {
         if(button.id != "decimal" || (button.id == "decimal" && !num2.includes("."))) {
         num2 += buttonText; };
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
      let value1:number = parseFloat(num1);
      let value2:number = parseFloat(num2);
      switch (operator) {
         case "+":
            answer= value1 + value2;
            break;
         case "-":
            answer =  value1 - value2;
            break;
         case "/":
            answer = Math.round((value1 / value2)*100)/100;
            break;
         case "x":
            answer = value1 * value2;
            break;
         case "%":
             let percentage = Math.round(((value1/100)* value2)*100)/100;
             answer = percentage;
             break;       
      }
      console.log("Answer: " + answer);   
      
   }
   // this bit handles errors

   if (isNaN(answer)) {
      answer= + "";
      alert("Please enter a valid quation");
    } else if ( num1.length > 8 || num2.length > 8 ) {
      num1 = num1.slice(0,8);
      num2 = num2.slice(10,18);
      alert("Your number is too long");
   };

// this bit updates the displays 
   num1Display.innerText = "" + num1;
   operatorDisplay.innerText = operator;
   num2Display.innerText  = "" + num2;
   resultDisplay.innerText = "" + answer;
   

};


 buttons.forEach((button) => button.addEventListener("click", handleButtonClick));


