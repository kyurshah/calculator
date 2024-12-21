function add(a,b) {
    return a + b ;
}

function subtract(a,b) {
    return a - b ;
}

function multiply(a,b) {
    return a * b ;
}

function divide(a,b) {
    return a / b ;
}

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
        return add(num1, num2);
        break;

        case "subtract":
        return subtract(num1, num2);
        break;

        case "multiply":
        return multiply(num1, num2);
        break;
        
        case "divide":
        return divide(num1, num2);
        break;  
        
        default:
            return null;
    }

}