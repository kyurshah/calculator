const display = document.querySelector("#display");

const digitButtons = document.querySelectorAll(".digitButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");



let num1 = 0;
let operator = "";
let num2 = 0;

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



function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
        return add(num1, num2);
        break;

        case "-":
        return subtract(num1, num2);
        break;

        case "*":
        return multiply(num1, num2);
        break;
        
        case "/":
        return divide(num1, num2);
        break;  
        
        default:
            return null;
    }

}


digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", function() {

        const value = digitButton.textContent;
        display.innerText += value;
        num1 += value;
    })
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function() {

        const operatorValue = operatorButton.textContent;
        display.innerText += operatorValue;
        operator = operatorValue;
        num2 = num1;
        num1 = "";
    })
});

equalButton.addEventListener("click", function() {
    let result = operate(operator, parseFloat(num1), parseFloat(num2));
    display.innerText = result;
    num2 = 0
    operator = "";
    num1 = result;


})

clearButton.addEventListener("click", function() {
    display.innerText = "";
    num2 = ""
    operator = "";
    num1 = "";
    result = ""

})
