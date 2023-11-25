import "./mian.css";

const buttons = document.querySelectorAll<HTMLButtonElement>("button");
// const calculation = document.querySelector<HTMLParagraphElement>("p");
const result = document.querySelector<HTMLHeadingElement>("h1");
const calculation = document.querySelector<HTMLParagraphElement>(".display__calculation");


if(!buttons || !calculation || !result) {throw new Error ("Error");
};


//const handleButtonClick  = (event : Event) => {
   //buttons.addEventListener("click", event => {
      //  if (event.target.id.includes("num")) {
       
      //  }})
   // };

// This function is the working code.
const handleButtonClick = (event: Event) => {
   // my event occurs on a html button > assign as button
   const button = event.currentTarget as HTMLButtonElement;
   const buttonText = button.textContent as string;

   if (buttonText == "C") {
      result.innerText = "0";
      calculation.innerText = "";
   } else if (button.classList.contains("number") || button.classList.contains("operator") ) {
      // button content will have text. Treat it as a string 
      result.innerText = button.textContent as string;
      calculation.innerText += button.textContent as string;
   }
}

// for every button we found earlier
// allow it to listen for a click event on itself
// when the button is now click it will run handleButtonClick
buttons.forEach((button) => button.addEventListener("click", handleButtonClick));
// display of input from the user 


// what happens when you click the button??


//calculation 

//special buttons % +/- etc. 