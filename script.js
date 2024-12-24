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