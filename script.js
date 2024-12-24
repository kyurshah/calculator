const display = document.querySelector("#display");
const nums = document.querySelector("#nums");

const digitButtons = document.querySelectorAll(".digitButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

const equalButton = document.querySelector("#equalButton");
const clearButton = document.querySelector("#clearButton");
const deleteButton = document.querySelector("#deleteButton");
const percentageButton = document.querySelector("#percentageButton");

let currentNumber = "";
let operator = "";
let previousNumber = "";

function add(a,b) {
    return a + b ;
}

function subtract(a,b) {
    return b - a ;
}

function multiply(a,b) {
    return a * b ;
}

function divide(a,b) {
    return b / a ;
}



function operate(operator, currentNumber, previousNumber) {
    switch (operator) {
        case "+":
        return add(currentNumber, previousNumber);
        break;

        case "-":
        return subtract(currentNumber, previousNumber);
        break;

        case "*":
        return multiply(currentNumber, previousNumber);
        break;
        
        case "/":
        return divide(currentNumber, previousNumber);
        break;  
        
        default:
            return null;
    }

}


digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", function() {

        const value = digitButton.textContent;
        display.innerText += value;
        currentNumber += value;
        console.log(`currentNumber = ${currentNumber}`)
        console.log(`previousNumber = ${previousNumber}`)
    })
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function() {

        const operatorValue = operatorButton.textContent;
        display.innerText += operatorValue;

        if (previousNumber, currentNumber, operator) {
            const result = operate(operator, parseFloat(currentNumber), parseFloat(previousNumber));
            previousNumber = Math.round(result * 100) / 100;
            display.innerText = previousNumber;
            display.innerText += operatorValue;
            operator = operatorValue;
            currentNumber = "";
            console.log(`currentNumber = ${currentNumber}`)
            console.log(`previousNumber = ${previousNumber}`)
            console.log(`operator = ${operator}`)
        }
        else {
            operator = operatorValue;
            previousNumber = currentNumber;
            currentNumber = "";
            console.log(`currentNumber = ${currentNumber}`)
            console.log(`previousNumber = ${previousNumber}`)
            console.log(`operator = ${operator}`)

        }
    })
});

equalButton.addEventListener("click", function() {
    console.log("equalButton")
    const result =  operate(operator, parseFloat(currentNumber), parseFloat(previousNumber))
    display.innerText = Math.round(result * 100) / 100;
    
})

clearButton.addEventListener("click", function() {
    console.log("clearButton")
    nums.innerText = "";
    display.innerText = "";
    currentNumber = "";
    previousNumber = "";
    operator = "";
})

deleteButton.addEventListener("click", function() {
    console.log("deleteButton")
})

percentageButton.addEventListener("click", function() {
    console.log("percentageButton")
})



//chatgpt

// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// let currentInput = ""; // Number currently being entered
// let previousInput = ""; // Number before the current one
// let operator = null; // Current operator

// // Add event listeners to all buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     // Handle numbers and decimals
//     if (!isNaN(value) || value === ".") {
//       currentInput += value; // Append digit or decimal
//       updateDisplay();
//     }

//     // Handle operators (+, -, *, /)
//     else if (["+", "-", "*", "/"].includes(value)) {
//       if (currentInput && previousInput && operator) {
//         // Evaluate the current expression first
//         previousInput = evaluate(previousInput, currentInput, operator);
//         currentInput = ""; // Reset current input for the next number
//       } else if (currentInput) {
//         // Move the current input to previous if no evaluation is needed
//         previousInput = currentInput;
//         currentInput = "";
//       }

//       operator = value; // Set the new operator
//       updateDisplay(); // Update the display to show the operator
//     }

//     // Handle equals (=)
//     else if (value === "=") {
//       if (currentInput && previousInput && operator) {
//         currentInput = evaluate(previousInput, currentInput, operator);
//         previousInput = "";
//         operator = null;
//         updateDisplay(); // Update the display with the result
//       }
//     }

//     // Handle clear (C)
//     else if (value === "AC") {
//       currentInput = "";
//       previousInput = "";
//       operator = null;
//       display.textContent = "0";
//     }
//   });
// });

// // Function to evaluate the result
// function evaluate(num1, num2, op) {
//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);

//   switch (op) {
//     case "+":
//       return (num1 + num2).toString();
//     case "-":
//       return (num1 - num2).toString();
//     case "*":
//       return (num1 * num2).toString();
//     case "/":
//       return num2 !== 0 ? (num1 / num2).toString() : "Error"; // Handle divide by 0
//     default:
//       return "0";
//   }
// }

// // Function to update the display
// function updateDisplay() {
//   // Show the full expression in the display
//   display.textContent = `${previousInput} ${operator || ""} ${currentInput}`.trim();
// }
