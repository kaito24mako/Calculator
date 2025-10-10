// Variables
const keys = document.querySelectorAll(".keys");
const display = document.querySelector("#display");

let currentNumber = 0;
let nextNumber = 0;
let operator = "";
let numberClicked = false;
let operatorClicked = false;

// Basic operators 

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operation logic 

function operate(operator, a, b) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            if (b === 0) {     
                result = "Error";   // message "error" if divided by 0 
            } else {
                result = divide(a, b);
            }
            break;
    };
    if (result.toString().length > 3) {
        return result.toFixed(2);   // round to two decimals 
    } else {
        return result;
    }
}

// Key clicks
function displayNumbers(event) {
    if (event.target.classList.contains("number") && (!numberClicked)) {
        display.textContent += event.target.textContent;

    } else if (event.target.classList.contains("number") && (numberClicked)) {
        display.textContent = "";
        display.textContent += event.target.textContent;

        numberClicked = false;

    } else if (event.target.classList.contains("operator") && (!operatorClicked)) {
        currentNumber = Number(display.textContent);
        operator = event.target.textContent;

        numberClicked = true;
        operatorClicked = true;

    } else if (event.target.classList.contains("operator") && (operatorClicked)) {
        nextNumber = Number(display.textContent);
        currentNumber = operate(operator, currentNumber, nextNumber);
        display.textContent = currentNumber;
        operator = event.target.textContent;

        numberClicked = true;
        
    } else if (event.target.classList.contains("equal")) {
        nextNumber = Number(display.textContent);
        display.textContent = operate(operator, currentNumber, nextNumber);
        
        operatorClicked = false;
    }
}

keys.forEach(key => {
    key.addEventListener("click", displayNumbers);
})


